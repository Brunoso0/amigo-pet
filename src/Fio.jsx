import { useEffect, useRef } from "react";
import { aCadaQuadro, curvaSuave, escalar, limitar, reduzido } from "./rolagem";

// O movimento-assinatura: um fio vermelho que atravessa a página e se desenha
// com a rolagem. Aqui vivem os três trechos que correm pela página (a, c1, c2);
// dentro das cenas fixas o fio continua em Pico.jsx e Petshop.jsx.
const SEGMENTOS = ["a", "c1", "c2"];
const PASSO = 6;

// Desenhos que o fio faz ao passar por um ponto. Todos em coordenadas
// relativas e fechados: começam e terminam no próprio ponto.
const FORMAS = {
  alca: "c -26 -4 -40 22 -22 36 c 14 10 30 -8 22 -36",
  novelo:
    "c -33 0 -60 -27 -60 -60 c 0 -33 27 -60 60 -60 c 33 0 60 27 60 60 c 0 33 -27 60 -60 60" +
    "c -8 -40 -30 -78 -42 -102 c 40 4 80 30 100 58 c -30 -34 -86 -34 -116 0 c 20 -30 62 -54 100 -58 c 10 36 -12 76 -42 102",
  pino: "c -10 -22 -34 -36 -34 -62 c 0 -20 15 -34 34 -34 c 19 0 34 14 34 34 c 0 26 -24 40 -34 62",
};

export default function Fio({ alvo }) {
  const svg = useRef(null);

  useEffect(() => {
    const raiz = alvo.current;
    const el = svg.current;
    const parado = reduzido();
    let segs = [];
    let pedido = 0;

    function construir() {
      const base = raiz.getBoundingClientRect();
      const k = limitar(window.innerWidth / 1200, 0.7, 1.15);
      segs = SEGMENTOS.map((nome, n) => {
        const caminho = el.children[n];
        const pts = [...raiz.querySelectorAll(`[data-fio="${nome}"]`)]
          .filter((a) => a.getClientRects().length)
          .sort((x, y) => x.dataset.fioOrdem - y.dataset.fioOrdem)
          .map((a) => {
            const r = a.getBoundingClientRect();
            return {
              x: r.left - base.left,
              y: r.top - base.top,
              forma: a.dataset.fioForma,
              escala: parseFloat(a.dataset.fioEscala || "1"),
            };
          });
        if (pts.length < 2) {
          caminho.setAttribute("d", "");
          return null;
        }
        const desenho = (p) => (p.forma ? escalar(FORMAS[p.forma], k * p.escala) : "");
        const d =
          `M${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}` + desenho(pts[0]) + curvaSuave(pts, desenho);
        caminho.setAttribute("d", d);
        const L = caminho.getTotalLength();
        const ys = [];
        for (let l = 0; l <= L; l += PASSO) ys.push(caminho.getPointAtLength(l).y);
        caminho.style.strokeDasharray = `${L} ${L + 2}`;
        const anterior = segs[n];
        const atual = parado ? L : anterior ? Math.min(anterior.atual, L) : 0;
        caminho.style.strokeDashoffset = L - atual;
        // o primeiro trecho já nasce com um pedaço à mostra: a guia pendurada
        return { caminho, L, ys, atual, minimo: n === 0 ? Math.min(L, 260 * k) : 0 };
      });
    }

    function agendar() {
      cancelAnimationFrame(pedido);
      pedido = requestAnimationFrame(construir);
    }

    function quadro() {
      // a ponta do fio acompanha uma linha a 74% da altura da tela
      const linha = window.scrollY + window.innerHeight * 0.74 - raiz.offsetTop;
      segs.forEach((s) => {
        if (!s) return;
        let meta = s.L;
        for (let i = 0; i < s.ys.length; i++) {
          if (s.ys[i] > linha) {
            meta = i * PASSO;
            break;
          }
        }
        meta = Math.max(meta, s.minimo);
        if (Math.abs(meta - s.atual) < 0.5) return;
        s.atual += (meta - s.atual) * 0.16;
        s.caminho.style.strokeDashoffset = s.L - s.atual;
      });
    }

    construir();
    const observador = new ResizeObserver(agendar);
    observador.observe(raiz);
    window.addEventListener("resize", agendar);
    window.addEventListener("fio:refazer", agendar);
    document.fonts?.ready.then(agendar);
    const parar = parado ? null : aCadaQuadro(quadro);

    return () => {
      observador.disconnect();
      window.removeEventListener("resize", agendar);
      window.removeEventListener("fio:refazer", agendar);
      cancelAnimationFrame(pedido);
      parar?.();
    };
  }, [alvo]);

  return (
    <svg ref={svg} className="fio" aria-hidden="true">
      <path />
      <path />
      <path />
    </svg>
  );
}

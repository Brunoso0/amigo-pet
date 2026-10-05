import { useEffect, useRef } from "react";
import Ancora from "../Ancora";
import { etapas } from "../conteudo";
import { aCadaQuadro, escalar, limitar, reduzido } from "../rolagem";

// Um desenho de linha única para cada parada do pet pela clínica. Coordenadas
// relativas: cada um parte da linha de base e volta a ela, `w` adiante.
const MOTIVOS = [
  // batimento + coração
  { w: 296, d: "l 40 0 q 10 -18 20 0 l 14 0 l 10 16 l 16 -110 l 16 140 l 12 -46 l 70 0 c -20 -20 -60 -45 -60 -75 c 0 -30 40 -40 60 -10 c 20 -30 60 -20 60 10 c 0 30 -40 55 -60 75 l 30 0 q 14 -26 28 0 l 40 0" },
  // gota + frasco
  { w: 300, d: "l 30 0 c 28 0 44 -22 44 -46 c 0 -30 -30 -50 -44 -84 c -14 34 -44 54 -44 84 c 0 24 16 46 44 46 l 100 0 l 50 -90 l 0 -45 l -8 0 l 46 0 l -8 0 l 0 45 l 50 90 l 40 0" },
  // onda do ultrassom
  { w: 278, d: "l 40 0 c 7 -14 15 -14 22 0 c 7 30 15 30 22 0 c 7 -58 15 -58 22 0 c 7 96 15 96 22 0 c 7 -140 15 -140 22 0 c 7 96 15 96 22 0 c 7 -58 15 -58 22 0 c 7 30 15 30 22 0 c 7 -14 15 -14 22 0 l 40 0" },
  // sutura contínua + laço
  { w: 330, d: "l 40 0 c 34 0 40 -70 18 -70 c -22 0 -16 70 18 70 c 34 0 40 -70 18 -70 c -22 0 -16 70 18 70 c 34 0 40 -70 18 -70 c -22 0 -16 70 18 70 c 34 0 40 -70 18 -70 c -22 0 -16 70 18 70 c 34 0 40 -70 18 -70 c -22 0 -16 70 18 70 l 50 0 c -50 -40 -50 40 0 0 c 50 -40 50 40 0 0 l 60 0" },
  // gato dormindo
  { w: 270, d: "l 30 0 c 0 -70 70 -95 120 -70 l 6 -30 l 16 22 l 10 0 l 10 -28 l 12 32 c 14 16 14 50 -4 60 c -6 6 10 14 30 14 l 40 0" },
  // casa + rabo abanando
  { w: 258, d: "l 30 0 l 0 -72 l 62 -52 l 62 52 l 0 72 l 30 0 q 9 -22 18 0 t 18 0 t 18 0 l 20 0" },
];

// Cena 3 — o pico. A tela fica presa e o fio passa como o traço de um monitor:
// entra pela esquerda, desenha a parada da vez e segue adiante.
export default function Pico() {
  const secao = useRef(null);
  const svg = useRef(null);

  useEffect(() => {
    if (reduzido()) return;
    const sec = secao.current;
    const el = svg.current;
    const palco = sec.querySelector(".fx-palco");
    const tracos = [...el.querySelectorAll(".traco")];
    const medidor = el.querySelector(".medidor");
    const guia = el.querySelector(".guia");
    let comprimentos = [];
    let entrada = 0;
    let p = 0;
    let s = 0;

    function construir() {
      const W = palco.clientWidth;
      const H = palco.clientHeight;
      const movel = W < 768;
      const k = limitar(W / 420, 0.8, 1.6);
      const base = Math.round(H * (movel ? 0.45 : 0.43));
      // os mesmos pontos de entrada e saída que as âncoras do fio da página
      const xEntra = W * (movel ? 0.06 : 0.12);
      const xSai = W * (movel ? 0.88 : 0.8);
      el.setAttribute("viewBox", `0 0 ${W} ${H}`);
      guia.setAttribute("d", `M0 ${base}H${W}`);

      comprimentos = MOTIVOS.map((m, i) => {
        const x0 = W / 2 - (m.w * k) / 2;
        const x1 = x0 + m.w * k;
        let inicio = `M-20 ${base}H${x0.toFixed(1)}`;
        let fim = `H${W + 20}`;
        if (i === 0) {
          const r = limitar(x0 - xEntra, 8, 60);
          inicio = `M${xEntra} -10V${base - r}Q${xEntra} ${base} ${xEntra + r} ${base}`;
          medidor.setAttribute("d", inicio);
          entrada = medidor.getTotalLength();
          inicio += `H${x0.toFixed(1)}`;
        }
        if (i === MOTIVOS.length - 1) {
          const r = limitar(xSai - x1, 8, 60);
          fim = `H${xSai - r}Q${xSai} ${base} ${xSai} ${base + r}V${H + 10}`;
        }
        tracos[i].setAttribute("d", inicio + escalar(m.d, k) + fim);
        const L = tracos[i].getTotalLength();
        tracos[i].style.strokeDasharray = `${L} ${L + 2}`;
        return L;
      });
    }

    function quadro() {
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const percurso = sec.offsetHeight - vh;
      if (percurso <= 0 || !comprimentos.length) return;
      p += (limitar(-r.top / percurso) - p) * 0.2;
      // antes de a cena prender, o fio já vem descendo pela borda
      s += (limitar((vh * 0.74 - r.top) / (vh * 0.74)) - s) * 0.2;
      const n = comprimentos.length;
      comprimentos.forEach((L, i) => {
        const u = p * n - i;
        let desenhado;
        if (i === 0) desenhado = s * entrada + limitar(u / 0.5) * (L - entrada);
        else if (i < n - 1) desenhado = limitar((u + 0.12) / 0.62) * L;
        else desenhado = limitar((u + 0.12) / 1.05) * L;
        const saida = i < n - 1 ? limitar((u - 0.7) / 0.3) : 0;
        tracos[i].style.strokeDashoffset = saida > 0 ? -saida * L : L - desenhado;
      });
    }

    construir();
    const observador = new ResizeObserver(construir);
    observador.observe(palco);
    const parar = aCadaQuadro(quadro);
    return () => {
      observador.disconnect();
      parar();
    };
  }, []);

  return (
    <section
      ref={secao}
      id="clinica"
      className="pico"
      data-fx-fixa
      data-fx-altura="7"
      data-fx-etapas="6"
      data-fx-fundo="#17110F"
      data-fx-tinta="#F3ECE0"
    >
      {/* as pontas do fio da página entram 14px na cena para emendar com o fio do palco */}
      <Ancora seg="a" ordem={60} className="left-[6%] top-[-70px] md:left-[12%]" />
      <Ancora seg="a" ordem={61} className="left-[6%] top-[14px] md:left-[12%]" />
      <Ancora seg="c1" ordem={10} className="left-[88%] top-[calc(100%-14px)] md:left-[80%]" />
      <Ancora seg="c1" ordem={11} className="left-[88%] top-[calc(100%+130px)] md:left-[80%]" />

      <div className="fx-palco">
        <svg ref={svg} className="pico-traco" aria-hidden="true">
          <path className="guia" />
          <path className="medidor" />
          {MOTIVOS.map((_, i) => (
            <path key={i} className="traco" />
          ))}
        </svg>

        <div className="absolute left-[calc(6%+20px)] top-[92px] max-w-[70%] md:left-[calc(12%+32px)] md:top-[112px]">
          <h2 className="rotulo">A clínica por dentro</h2>
          <p className="suave mt-2 max-w-[30ch] text-[15px] max-md:hidden">
            Do primeiro exame à volta para casa, tudo no mesmo endereço.
          </p>
        </div>

        <div className="pico-etapas absolute left-6 right-[16%] top-[calc(45%+88px)] md:bottom-[9vh] md:top-auto md:left-[12%] md:right-[26%]">
          {etapas.map((e, i) => (
            <article key={e.nome} className="fx-etapa">
              <svg className="pico-mini" viewBox={`-10 -150 ${MOTIVOS[i].w + 20} 230`} aria-hidden="true">
                <path className="traco" d={`M0 0${MOTIVOS[i].d}`} />
              </svg>
              <h3 className="t-etapa">{e.nome}</h3>
              <p className="suave mt-3 max-w-[36ch] md:mt-5">{e.texto}</p>
            </article>
          ))}
        </div>

        <ol className="pico-lista rotulo absolute bottom-[9vh] right-[6vw] hidden space-y-3 md:block" aria-hidden="true">
          {etapas.map((e) => (
            <li key={e.nome}>{e.nome}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

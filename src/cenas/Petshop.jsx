import { useEffect, useRef } from "react";
import Ancora from "../Ancora";
import { produtos } from "../conteudo";
import { Imagem } from "../ilustracoes";
import { aCadaQuadro, curvaSuave, limitar, reduzido } from "../rolagem";

// Cena 4 — o petshop. O fio se enrola num novelo e depois vira varal: os
// serviços e produtos passam pendurados nele, deslizando de lado.
export default function Petshop() {
  const secao = useRef(null);
  const svg = useRef(null);
  const saida = useRef(null);
  const saidaAbaixo = useRef(null);

  useEffect(() => {
    if (reduzido()) return;
    const sec = secao.current;
    const el = svg.current;
    const palco = sec.querySelector(".fx-palco");
    const trilho = sec.querySelector('[data-fx="trilho"]');
    const fio = el.querySelector(".traco");
    const medidor = el.querySelector(".medidor");
    let L = 0;
    let antes = 0;
    let varal = 0;
    let p = 0;
    let s = 0;

    function construir() {
      const W = palco.clientWidth;
      const H = palco.clientHeight;
      const movel = W < 768;
      const fim = trilho.querySelector(".varal-fim");
      const marco = trilho.querySelector(".varal-saida");
      const total = fim.offsetLeft + fim.offsetWidth;
      const cartoes = [...trilho.querySelectorAll(".varal-cartao")];
      const y = cartoes[0].offsetTop - 16;
      const r = movel ? 36 : 60;
      const xEntra = W * (movel ? 0.06 : 0.12);
      const xSai = marco.offsetLeft + marco.offsetWidth / 2;

      el.style.width = `${total}px`;
      el.style.height = `${H}px`;
      el.setAttribute("viewBox", `0 0 ${total} ${H}`);

      const pts = [
        { x: xEntra + r, y },
        ...cartoes.map((c, i) => ({
          x: c.offsetLeft + c.offsetWidth / 2,
          y: y + (i % 2 ? 9 : -5),
        })),
        { x: xSai - r, y },
      ];
      const descida = `M${xEntra} -10V${y - r}Q${xEntra} ${y} ${xEntra + r} ${y}`;
      medidor.setAttribute("d", descida);
      const queda = medidor.getTotalLength();
      const meio = descida + curvaSuave(pts);
      medidor.setAttribute("d", meio);
      varal = medidor.getTotalLength();
      fio.setAttribute("d", `${meio}Q${xSai} ${y} ${xSai} ${y + r}V${H + 10}`);
      L = fio.getTotalLength();
      // ao prender, a descida e o começo do varal já estão desenhados
      antes = queda + 0.3 * (varal - queda);
      fio.style.strokeDasharray = `${L} ${L + 2}`;

      // avisa o fio da página onde o varal termina quando o trilho chega ao fim
      const x = `${xSai - (total - W)}px`;
      if (saida.current.style.left !== x) {
        saida.current.style.left = x;
        saidaAbaixo.current.style.left = x;
        window.dispatchEvent(new Event("fio:refazer"));
      }
    }

    function quadro() {
      const ret = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const percurso = sec.offsetHeight - vh;
      if (percurso <= 0 || !L) return;
      p += (limitar(-ret.top / percurso) - p) * 0.2;
      s += (limitar((vh * 0.74 - ret.top) / (vh * 0.74)) - s) * 0.2;
      const desenhado =
        antes * s + (varal - antes) * limitar(p / 0.6) + (L - varal) * limitar((p - 0.85) / 0.15);
      fio.style.strokeDashoffset = L - desenhado;
    }

    construir();
    const observador = new ResizeObserver(construir);
    observador.observe(palco);
    document.fonts?.ready.then(construir);
    const parar = aCadaQuadro(quadro);
    return () => {
      observador.disconnect();
      parar();
    };
  }, []);

  return (
    <>
      <section
        id="petshop"
        data-fx-fundo="#F3ECE0"
        data-fx-tinta="#17110F"
        className="relative px-6 pb-[112px] pt-[224px] md:px-[6vw] md:pb-[200px] md:pt-[200px]"
      >
        <Ancora seg="c1" ordem={20} forma="novelo" escala={1.6} className="left-[66%] top-[184px] md:left-[76%] md:top-[66%]" />
        <Ancora seg="c1" ordem={25} className="left-[calc(100%-8px)] top-[52%] md:hidden" />
        <Ancora seg="c1" ordem={26} className="left-[calc(100%-8px)] top-[calc(100%-130px)] md:hidden" />
        <Ancora seg="c1" ordem={30} className="left-1/2 top-[calc(100%-64px)] md:top-[calc(100%-80px)]" />

        <div className="md:ml-[8.33%] md:w-[54%]">
          <p className="rotulo" data-fx="surgir">
            O petshop
          </p>
          <h2 className="t-h2 mt-6" data-fx="esquerda">
            Depois da alta, a vida continua.
          </h2>
          <p className="suave mt-6 max-w-[44ch] md:mt-10" data-fx="esquerda" data-fx-atraso="120">
            Banho e tosa para sair cheiroso. Ração, brinquedo, remédio e cosmético para levar para
            casa. Tudo no mesmo endereço da clínica.
          </p>
        </div>
      </section>

      <section
        ref={secao}
        className="varal"
        data-fx-fixa
        data-fx-altura="3.4"
        data-fx-fundo="#F3ECE0"
        data-fx-tinta="#17110F"
      >
        <Ancora seg="c1" ordem={40} className="left-[6%] top-[-90px] md:left-[12%] md:top-[-150px]" />
        <Ancora seg="c1" ordem={41} className="left-[6%] top-[14px] md:left-[12%]" />
        <Ancora seg="c2" ordem={10} ref={saida} className="top-[calc(100%-14px)]" />
        <Ancora seg="c2" ordem={11} ref={saidaAbaixo} className="top-[calc(100%+130px)]" />

        <div className="fx-palco">
          <p
            className="varal-fundo absolute bottom-[3vh] left-0 whitespace-nowrap font-display text-[22vw] italic leading-none tracking-[-0.04em] text-tinta/[0.07]"
            data-fx-x="60,-460"
            aria-hidden="true"
          >
            petshop petshop
          </p>

          <div data-fx="trilho" className="relative h-full w-full min-w-0 items-start self-stretch">
            <svg ref={svg} className="varal-fio" aria-hidden="true">
              <path className="medidor" />
              <path className="traco" />
            </svg>
            <div className="varal-vazio w-[20vw] shrink-0 md:w-[22vw]" />
            {produtos.map((produto, i) => (
              <article
                key={produto.nome}
                className={`varal-cartao mr-[7vw] md:mr-[3.5vw] ${i % 2 ? "rotate-[1.6deg]" : "-rotate-[1.2deg]"}`}
              >
                <span className="pregador" aria-hidden="true" />
                <div className="h-[min(69vw,34dvh)] overflow-hidden rounded-[20px] bg-areia md:aspect-[4/3] md:h-auto">
                  <Imagem slot={produto.imagem} alt={produto.nome} />
                </div>
                <h3 className="t-h3 mt-5 md:mt-6">{produto.nome}</h3>
                <p className="suave mt-2 text-[16px]">{produto.texto}</p>
              </article>
            ))}
            <div className="varal-saida varal-vazio w-[90px] shrink-0" />
            <p className="varal-texto t-h1 mt-[34dvh] w-[38vw] shrink-0 max-md:hidden">
              Tudo a poucos passos da sala de consulta.
            </p>
            <div className="varal-fim varal-vazio w-[12vw] shrink-0 md:w-[6vw]" />
          </div>
        </div>
      </section>
    </>
  );
}

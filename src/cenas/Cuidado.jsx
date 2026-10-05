import Ancora from "../Ancora";
import { Imagem } from "../ilustracoes";

// Cena 2 — o jeito da casa. Texto editorial ancorado à esquerda; o fio abraça
// o retrato e depois sublinha a frase que prepara o pico.
export default function Cuidado() {
  return (
    <section
      id="cuidado"
      data-fx-fundo="#F3ECE0"
      data-fx-tinta="#17110F"
      className="relative px-6 pb-[72px] pt-[64px] md:px-[6vw] md:py-[168px]"
    >
      <Ancora seg="a" ordem={30} className="left-[calc(100%-8px)] top-[3%] md:hidden" />
      <Ancora seg="a" ordem={31} className="left-[calc(100%-8px)] top-[30%] md:hidden" />

      <div className="grid gap-14 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <p className="rotulo" data-fx="surgir">
            O jeito da casa
          </p>
          <h2 className="t-h2 mt-6" data-fx="subir">
            Aqui, primeiro a gente escuta.
          </h2>
          <div className="mt-6 max-w-[56ch] space-y-5 md:ml-[16.66%] md:mt-10 md:space-y-6">
            <p className="suave" data-fx="subir">
              A AmigoPet é uma clínica veterinária de Senhor do Bonfim. Consulta, vacina, exame,
              ultrassom, cirurgia e internação acontecem no mesmo endereço — para o cuidado do seu
              pet não depender de estrada.
            </p>
            <p className="suave" data-fx="subir" data-fx-atraso="120">
              E quando a saúde está em dia, o petshop cuida do resto: banho e tosa, ração,
              brinquedos, remédios e cosméticos.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9 md:pt-6">
          <div className="relative mx-auto aspect-square w-[66vw] max-w-[420px] md:w-full">
            {/* o fio abraça o retrato pela direita; no celular ele chega pela borda da tela */}
            <Ancora seg="a" ordem={39} className="left-[calc(50%+50vw-8px)] top-[-34%] md:hidden" />
            <Ancora seg="a" ordem={40} className="left-1/2 top-[-9%] max-md:hidden" />
            <Ancora seg="a" ordem={41} className="left-[91.7%] top-[8.3%]" />
            <Ancora seg="a" ordem={42} className="left-[109%] top-1/2" />
            <Ancora seg="a" ordem={43} className="left-[91.7%] top-[91.7%]" />
            <Ancora seg="a" ordem={44} className="left-1/2 top-[109%] max-md:hidden" />
            <svg viewBox="0 0 100 100" className="absolute inset-[-9%] h-[118%] w-[118%]" aria-hidden="true">
              <path
                d="M13.2 80.9A48 48 0 0 1 10.7 22.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="absolute inset-0 overflow-hidden rounded-full bg-areia text-tinta" data-fx="crescer">
              <Imagem slot="cuidado" alt="Veterinária da AmigoPet examinando um pet" />
            </div>
            <div className="selo absolute bottom-[-6%] left-[-10%] w-[36%]" data-fx-paralaxe="0.1">
              <svg viewBox="0 0 120 120" className="h-full w-full rounded-full bg-papel text-tinta" aria-hidden="true">
                <defs>
                  <path id="selo-circulo" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
                </defs>
                <text fontSize="10.5" fontWeight="600" fill="currentColor" style={{ textTransform: "uppercase" }}>
                  <textPath href="#selo-circulo" textLength="268" lengthAdjust="spacing">
                    clínica veterinária · petshop · Senhor do Bonfim ·
                  </textPath>
                </text>
                <circle cx="60" cy="60" r="5" fill="var(--color-fio)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[72px] w-fit md:mt-[168px]">
        <p className="t-declaracao" data-fx="subir">
          Não precisa
          <br />
          pegar estrada.
        </p>
        <Ancora seg="a" ordem={49} className="left-[calc(100vw-32px)] top-[20%] md:hidden" />
        <Ancora seg="a" ordem={50} className="left-full top-[calc(100%+18px)]" />
        <Ancora seg="a" ordem={51} className="left-0 top-[calc(100%+18px)] md:left-[6vw]" />
      </div>
    </section>
  );
}

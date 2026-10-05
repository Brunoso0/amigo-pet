import Ancora from "../Ancora";
import { equipe } from "../conteudo";
import { Imagem } from "../ilustracoes";

// Cena 5 — quem cuida. Calma e íntima: a casa, a equipe, pouca coisa na tela.
export default function QuemCuida() {
  return (
    <section
      id="equipe"
      data-fx-fundo="#EADFCD"
      data-fx-tinta="#17110F"
      className="relative px-6 pb-[104px] pt-[56px] md:px-[6vw] md:py-[168px]"
    >
      <Ancora seg="c2" ordem={20} className="left-[calc(100%-8px)] top-[16%] md:left-[53%] md:top-[45%]" />
      <Ancora seg="c2" ordem={21} className="left-[calc(100%-8px)] top-[92%] md:left-[53%] md:top-[96%]" />

      <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-6">
        <div className="relative mr-12 max-md:order-2 md:col-span-5 md:mr-0">
          <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-papel text-tinta" data-fx="crescer">
            <Imagem slot="fachada" alt="Fachada da Clínica AmigoPet na R. Cônego Hugo" />
          </div>
          <div className="absolute bottom-[-8%] right-[-12%] w-[46%]" data-fx-paralaxe="0.12">
            <div
              className="aspect-square overflow-hidden rounded-[24px] bg-creme text-tinta shadow-[0_28px_48px_-30px_rgb(23_17_15/0.5)]"
              data-fx-mouse="12"
            >
              <Imagem slot="equipe" alt="Equipe da AmigoPet" />
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <p className="rotulo" data-fx="surgir">
            Quem cuida
          </p>
          <h2 className="t-h2 mt-6" data-fx="surgir" data-fx-duracao="1400">
            Gente daqui, cuidando dos bichos daqui.
          </h2>
          <p className="suave mt-6 max-w-[44ch] md:mt-10" data-fx="surgir" data-fx-atraso="150">
            A AmigoPet é uma clínica de Senhor do Bonfim, feita para os bichos e as famílias da
            cidade e da região.
          </p>
          <ul className="mt-8 border-t md:mt-12 border-current/20" data-fx="surgir" data-fx-atraso="250">
            {equipe.map((pessoa, i) => (
              <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-current/20 py-5">
                <span className="font-display text-[24px] leading-tight">
                  {pessoa.nome}
                  {pessoa.provisorio && <span className="provisorio">provisório</span>}
                </span>
                <span className="suave text-[15px] tabular-nums">{pessoa.registro}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

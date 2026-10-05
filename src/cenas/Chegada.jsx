import Ancora from "../Ancora";
import { CaoCabeca, CaoPatas } from "../ilustracoes";

// Cena 1 — capa de revista. O cão espia por trás do horizonte com a guia na
// boca: é dali que o fio nasce.
export default function Chegada() {
  return (
    <header id="topo" className="chegada relative isolate overflow-hidden bg-areia text-tinta md:min-h-svh">
      <div className="chegada-texto relative z-10 px-6 pt-24 md:px-[6vw] md:pt-28">
        <div className="rotulo flex justify-between gap-6">
          <span data-fx="surgir">Clínica veterinária &amp; petshop</span>
          <span data-fx="surgir" data-fx-atraso="150" className="text-right">
            Senhor do Bonfim — Bahia
          </span>
        </div>
        <p className="masthead mt-5 md:mt-3">
          Amigo<em>Pet</em>
        </p>
        <h1 className="t-h1 mt-6 max-w-[17ch] md:mt-10" data-fx="palavras">
          Veterinária de verdade, sem sair de Senhor do Bonfim.
        </h1>
        <p className="suave mt-4 max-w-[32ch] md:mt-5" data-fx="surgir" data-fx-atraso="700">
          Consulta, exame, cirurgia e internação — e um petshop inteiro — no mesmo endereço.
        </p>
      </div>

      <div className="cao">
        <CaoCabeca className="h-full w-full" />
        <Ancora seg="a" ordem={10} forma="alca" className="left-1/2 top-[79%]" />
      </div>
      <div className="horizonte" aria-hidden="true" />
      <div className="cao cao-patas">
        <CaoPatas className="h-full w-full" />
      </div>

      <Ancora seg="a" ordem={20} className="bottom-[3%] left-[84%] md:left-[58%]" />
    </header>
  );
}

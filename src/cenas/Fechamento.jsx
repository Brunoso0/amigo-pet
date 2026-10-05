import Ancora from "../Ancora";
import { endereco, horarios, instagram, linkWhatsapp, whatsapp } from "../conteudo";
import { IconeConversa } from "../Nav";

// Cena 6 — fechamento. O fio marca o endereço com um alfinete e termina no
// botão: a única chamada da página.
export default function Fechamento() {
  return (
    <section
      id="onde"
      data-fx-fundo="#F3ECE0"
      data-fx-tinta="#17110F"
      className="relative px-6 pt-[72px] md:px-[6vw] md:pt-[140px]"
    >
      <div className="grid md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-7">
          <p className="rotulo" data-fx="surgir">
            Onde fica
          </p>
          <h2 className="t-fecho mt-6" data-fx="crescer">
            Vamos marcar?
          </h2>
          <p className="suave mt-6 max-w-[40ch] md:mt-10" data-fx="subir">
            Mande uma mensagem dizendo o que seu pet precisa. A gente combina o melhor horário
            por lá.
          </p>
        </div>

        <div className="relative mt-14 pl-[84px] pt-[40px] md:col-span-4 md:col-start-9 md:row-span-2 md:mt-0">
          {/* o fio contorna o alfinete pela esquerda e chega à ponta por baixo */}
          <Ancora seg="c2" ordem={26} className="left-[calc(100%+16px)] top-[-36px] md:hidden" />
          <Ancora seg="c2" ordem={27} className="left-[-8px] top-[-24px] md:hidden" />
          <Ancora seg="c2" ordem={28} className="left-[-8px] top-[56px] md:left-[-48px] md:top-[122px]" />
          <Ancora seg="c2" ordem={30} forma="pino" className="left-[34px] top-[136px]" />
          <Ancora seg="c2" ordem={31} className="left-[34px] top-[calc(100%+24px)]" />
          <dl className="space-y-8 md:space-y-10">
            <div data-fx="subir">
              <dt className="rotulo suave">Endereço</dt>
              <dd className="mt-3 font-display text-[36px] leading-[1.05] tracking-[-0.02em]">
                {endereco.rua}
              </dd>
              <dd className="mt-2">{endereco.cidade}</dd>
              <dd className="mt-3 text-[15px]">
                <a href={endereco.mapa} target="_blank" rel="noreferrer" className="underline decoration-fio underline-offset-4 hover:text-fio">
                  Abrir no mapa
                </a>
              </dd>
            </div>
            <div data-fx="subir" data-fx-atraso="100">
              <dt className="rotulo suave">
                Horário
                {horarios.provisorio && <span className="provisorio">provisório</span>}
              </dt>
              {horarios.linhas.map(([dia, hora]) => (
                <dd key={dia} className="mt-3 flex justify-between gap-4 tabular-nums">
                  <span>{dia}</span>
                  <span className="whitespace-nowrap">{hora}</span>
                </dd>
              ))}
              <dd className="suave mt-4 text-[15px]">Não temos plantão 24h.</dd>
            </div>
            <div data-fx="subir" data-fx-atraso="200">
              <dt className="rotulo suave">WhatsApp</dt>
              <dd className="mt-3 tabular-nums">{whatsapp.exibicao}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-[104px] md:col-span-7 md:mt-20">
          <div className="relative w-full md:w-fit">
            <Ancora seg="c2" ordem={40} className="left-1/2 top-[-72px] md:hidden" />
            <Ancora seg="c2" ordem={41} className="left-1/2 top-[-14px] md:hidden" />
            <Ancora seg="c2" ordem={40} className="left-[calc(100%+160px)] top-1/2 max-md:hidden" />
            <Ancora seg="c2" ordem={41} className="left-[calc(100%+16px)] top-1/2 max-md:hidden" />
            <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="botao-grande" data-fx="subir">
              <IconeConversa className="h-7 w-7 shrink-0" />
              Marcar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-[72px] flex flex-col gap-4 border-t border-current/20 py-8 text-[15px] md:mt-[200px] md:flex-row md:items-baseline md:justify-between">
        <p className="font-display text-[24px] leading-none tracking-[-0.03em]">
          Amigo<em>Pet</em>
        </p>
        <p className="suave">Clínica veterinária &amp; petshop · {endereco.rua} · {endereco.cidade}</p>
        <p>
          <a href={instagram.url} className="hover:text-fio">
            {instagram.rotulo}
          </a>
          {instagram.provisorio && <span className="provisorio">provisório</span>}
        </p>
      </footer>
    </section>
  );
}

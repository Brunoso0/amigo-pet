import { linkWhatsapp } from "./conteudo";

export function IconeConversa({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.2A8.5 8.5 0 1 1 20.5 11.5Z" />
    </svg>
  );
}

// Menu em pílula, sempre à vista: é ele que mantém o botão do WhatsApp
// presente durante toda a rolagem.
export default function Nav() {
  return (
    <nav
      aria-label="Principal"
      className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-24px)] max-w-[720px] -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-tinta/10 bg-papel/85 py-1.5 pl-5 pr-1.5 text-tinta shadow-[0_12px_32px_-20px_rgb(23_17_15/0.5)] backdrop-blur-md"
    >
      <a href="#topo" className="font-display text-[22px] leading-none tracking-[-0.03em]">
        Amigo<em>Pet</em>
      </a>
      <div className="hidden items-center gap-7 text-[15px] md:flex">
        <a href="#clinica" className="hover:text-fio">Clínica</a>
        <a href="#petshop" className="hover:text-fio">Petshop</a>
        <a href="#onde" className="hover:text-fio">Onde fica</a>
      </div>
      <a
        href={linkWhatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-fio px-4 py-2.5 text-[15px] font-semibold leading-none text-papel hover:bg-tinta"
      >
        <IconeConversa className="h-4 w-4" />
        <span>
          Marcar<span className="max-[380px]:hidden"> pelo WhatsApp</span>
        </span>
      </a>
    </nav>
  );
}

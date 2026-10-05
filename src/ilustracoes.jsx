import { imagens } from "./conteudo";

// Ilustrações em traço que ocupam o lugar das fotos enquanto elas não chegam.
// Todas usam currentColor, então herdam a tinta de onde estiverem.

const traco = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function CaoCabeca({ className }) {
  return (
    <svg viewBox="0 0 320 240" className={className} aria-hidden="true">
      <g fill="currentColor">
        <path d="M92 96C52 84 34 130 50 178c6 18 28 12 36-10 6-18 10-38 18-56Z" />
        <path d="M228 96c40-12 58 34 42 82-6 18-28 12-36-10-6-18-10-38-18-56Z" />
      </g>
      <path d="M84 222C68 150 96 70 160 70s92 80 76 152Z" fill="var(--color-papel)" {...traco} />
      <ellipse cx="190" cy="138" rx="27" ry="31" fill="var(--color-areia)" />
      <g fill="currentColor">
        <circle cx="132" cy="140" r="5.5" />
        <circle cx="188" cy="140" r="5.5" />
        <path d="M147 160q13-7 26 0 0 12-13 17-13-5-13-17Z" />
      </g>
      <path d="M160 177v9M139 187q10 12 21-1 11 13 21 1" {...traco} />
    </svg>
  );
}

export function CaoPatas({ className }) {
  return (
    <svg viewBox="0 0 320 240" className={className} aria-hidden="true">
      <g fill="var(--color-papel)" {...traco}>
        <rect x="92" y="186" width="42" height="30" rx="15" />
        <rect x="186" y="186" width="42" height="30" rx="15" />
      </g>
      <path d="M106 199v11M120 199v11M200 199v11M214 199v11" {...traco} strokeWidth="2.5" />
    </svg>
  );
}

function Gato() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <path d="M32 200c4-30 34-38 68-34 34-4 64 4 68 34" fill="var(--color-papel)" {...traco} />
      <g fill="var(--color-papel)" {...traco}>
        <path d="M60 96 54 44l38 22ZM140 96l6-52-38 22Z" />
        <path d="M50 120c0-40 20-58 50-58s50 18 50 58c0 32-22 48-50 48s-50-16-50-48Z" />
      </g>
      <path d="M96 128h8l-4 5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M72 110q9 9 18 0M110 110q9 9 18 0M100 134v5M89 141q6 7 11-2 5 9 11 2M58 128l-22-4M58 137l-22 5M142 128l22-4M142 137l22 5"
        {...traco}
        strokeWidth="2.5"
      />
    </svg>
  );
}

function Fachada() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
      <circle cx="318" cy="86" r="26" {...traco} />
      <path d="M20 440h360" {...traco} />
      <path d="M76 440V150h248v290" {...traco} />
      <path d="M62 232h276l-22-46H84Z" fill="var(--color-areia)" {...traco} />
      <path d="M118 186l-10 46M164 186l-6 46M200 186v46M236 186l6 46M282 186l10 46" {...traco} strokeWidth="2.5" />
      <rect x="132" y="118" width="136" height="26" rx="13" fill="currentColor" />
      <path d="M168 440V318a32 32 0 0 1 64 0v122" {...traco} />
      <circle cx="220" cy="382" r="3.5" fill="currentColor" />
      <rect x="256" y="290" width="48" height="62" rx="5" {...traco} />
      <path d="M280 290v62M256 321h48" {...traco} strokeWidth="2.5" />
      <path d="M100 440v-34h34v34M117 406c-16-18-14-40 0-52 14 12 16 34 0 52Z" {...traco} />
    </svg>
  );
}

function Equipe() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full" aria-hidden="true">
      <path d="M40 300c0-78 30-106 76-106s76 28 76 106" fill="var(--color-papel)" {...traco} />
      <circle cx="116" cy="126" r="42" fill="var(--color-papel)" {...traco} />
      <path d="M100 124q6 6 12 0M124 124q6 6 12 0M106 144q10 9 22 0" {...traco} strokeWidth="2.5" />
      <path d="M166 300c4-44 20-62 50-62s50 18 54 62" fill="var(--color-areia)" {...traco} />
      <g fill="currentColor">
        <path d="M190 178c-20-2-26 22-14 42 10 4 14-16 14-42ZM242 178c20-2 26 22 14 42-10 4-14-16-14-42Z" />
      </g>
      <circle cx="216" cy="206" r="34" fill="var(--color-areia)" {...traco} />
      <g fill="currentColor">
        <circle cx="204" cy="200" r="3.5" />
        <circle cx="228" cy="200" r="3.5" />
        <path d="M209 213q7-4 14 0 0 7-7 9-7-2-7-9Z" />
      </g>
    </svg>
  );
}

function Banho() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden="true">
      <path d="M44 98h152v14c0 26-20 40-42 40H86c-22 0-42-14-42-40Z" fill="var(--color-papel)" {...traco} />
      <path d="M84 152v12M156 152v12M36 98h168" {...traco} />
      <g {...traco} strokeWidth="2.5">
        <circle cx="92" cy="74" r="11" />
        <circle cx="120" cy="58" r="16" />
        <circle cx="150" cy="74" r="10" />
        <circle cx="168" cy="48" r="6" />
        <circle cx="74" cy="46" r="5" />
      </g>
    </svg>
  );
}

function Racoes() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden="true">
      <path d="M80 30h80l10 126H70Z" fill="var(--color-papel)" {...traco} />
      <path d="M80 30l8 16h64l8-16M76 128h88" {...traco} />
      <g fill="currentColor">
        <rect x="102" y="82" width="36" height="12" />
        <circle cx="102" cy="82" r="8" />
        <circle cx="102" cy="94" r="8" />
        <circle cx="138" cy="82" r="8" />
        <circle cx="138" cy="94" r="8" />
      </g>
    </svg>
  );
}

function Brinquedos() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden="true">
      <circle cx="120" cy="88" r="50" fill="var(--color-papel)" {...traco} />
      <path d="M82 56c22 16 22 48 0 64M158 56c-22 16-22 48 0 64" {...traco} />
      <path d="M66 156h108M38 70l-14-6M34 92H18M40 114l-14 6" {...traco} strokeWidth="2.5" />
    </svg>
  );
}

function Remedios() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden="true">
      <rect x="76" y="56" width="68" height="100" rx="12" fill="var(--color-papel)" {...traco} />
      <rect x="88" y="28" width="44" height="28" rx="6" fill="currentColor" />
      <path d="M76 88h68M76 128h68M110 98v20M100 108h20" {...traco} />
      <g transform="rotate(-28 184 132)">
        <rect x="160" y="121" width="48" height="22" rx="11" fill="var(--color-papel)" {...traco} />
        <path d="M184 121v22" {...traco} />
      </g>
    </svg>
  );
}

function Cosmeticos() {
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden="true">
      <rect x="86" y="72" width="60" height="86" rx="14" fill="var(--color-papel)" {...traco} />
      <path d="M106 72V56h20v16M116 56V40h28v10M86 104h60" {...traco} />
      <path d="M176 92c10 14 14 22 14 30a14 14 0 0 1-28 0c0-8 4-16 14-30Z" {...traco} />
      <path d="M56 46v22M45 57h22M62 112v14M55 119h14" {...traco} strokeWidth="2.5" />
    </svg>
  );
}

const ILUSTRACOES = {
  cuidado: Gato,
  fachada: Fachada,
  equipe: Equipe,
  banho: Banho,
  racoes: Racoes,
  brinquedos: Brinquedos,
  remedios: Remedios,
  cosmeticos: Cosmeticos,
};

// Mostra a foto do espaço, se já existir em conteudo.js; senão, a ilustração.
export function Imagem({ slot, alt = "" }) {
  const foto = imagens[slot];
  if (foto) return <img src={foto} alt={alt} loading="lazy" className="h-full w-full object-cover" />;
  const Ilustracao = ILUSTRACOES[slot];
  return <Ilustracao />;
}

// Ponto invisível por onde o fio passa. O Fio lê a posição destes pontos na
// página e liga todos os de um mesmo segmento, na ordem.
export default function Ancora({ seg, ordem, forma, escala, className = "", style, ref }) {
  return (
    <span
      ref={ref}
      aria-hidden="true"
      data-fio={seg}
      data-fio-ordem={ordem}
      data-fio-forma={forma}
      data-fio-escala={escala}
      className={`pointer-events-none absolute block h-0 w-0 ${className}`}
      style={style}
    />
  );
}

// Utilidades de rolagem e de traçado compartilhadas pelo fio e pelas cenas.

const assinantes = new Set();
let rodando = false;

function laco() {
  assinantes.forEach((fn) => fn());
  requestAnimationFrame(laco);
}

// Um único requestAnimationFrame para a página inteira.
export function aCadaQuadro(fn) {
  assinantes.add(fn);
  if (!rodando) {
    rodando = true;
    requestAnimationFrame(laco);
  }
  return () => assinantes.delete(fn);
}

export const reduzido = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const limitar = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

// Multiplica todos os números de um trecho de path em coordenadas relativas.
export const escalar = (d, k) => d.replace(/-?\d*\.?\d+/g, (n) => (parseFloat(n) * k).toFixed(1));

// Curva suave (Catmull-Rom) passando por todos os pontos; devolve só os trechos "C".
// `aoChegar(ponto)` permite encaixar um desenho assim que a curva alcança cada ponto.
export function curvaSuave(pts, aoChegar) {
  let d = "";
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += `C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    if (aoChegar) d += aoChegar(p2);
  }
  return d;
}

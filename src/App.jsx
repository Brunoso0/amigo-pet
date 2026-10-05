import { useEffect, useRef } from "react";
import Fio from "./Fio";
import Nav from "./Nav";
import Chegada from "./cenas/Chegada";
import Cuidado from "./cenas/Cuidado";
import Fechamento from "./cenas/Fechamento";
import Petshop from "./cenas/Petshop";
import Pico from "./cenas/Pico";
import QuemCuida from "./cenas/QuemCuida";

export default function App() {
  const pagina = useRef(null);

  // O motor lê os atributos data-fx-* uma única vez, ao carregar. Por isso ele
  // só entra depois que o React já pôs a página inteira no DOM.
  useEffect(() => {
    if (window.__motorCarregado) return;
    window.__motorCarregado = true;
    const script = document.createElement("script");
    script.src = `${import.meta.env.BASE_URL}sites-incriveis.js`;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Nav />
      <div className="grao" aria-hidden="true" />
      <main ref={pagina} className="relative">
        <Chegada />
        <Cuidado />
        <Pico />
        <Petshop />
        <QuemCuida />
        <Fechamento />
        <Fio alvo={pagina} />
      </main>
    </>
  );
}

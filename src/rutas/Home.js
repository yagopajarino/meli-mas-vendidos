import { Link } from "react-router-dom";
import Button from "../components/Button";
import MasVendido from "../components/MasVendido";

export default function Home() {
  return (
    <div className="w-3/4 flex flex-col items-center">
      <div className="w-full flex flex-col items-center text-left">
        <h1 className="text-6xl py-16">Mercado Libre Más Vendidos</h1>
        <p className=" text-lg w-full pb-3">
          Poné a prueba tus conocimientos del mercado para identificar los
          productos más vendidos de la categoría.
        </p>
        <p className=" text-lg pb-3">
          Desde mediados de 2021{" "}
          <a
            href="https://www.mercadolibre.com.ar/"
            className=" text-pink-500 hover:underline"
          >
            Mercado Libre
          </a>{" "}
          publica los productos más vendidos de cada categoría disponibles en el
          sitio, los cuales aparecen listados con una marca así
          <MasVendido />
          El objetivo del juego es identificar los dos productos más vendidos de
          la categoría dada (al azar) de una selección de seis productos de la
          categoría.
        </p>
        <h2 className="text-4xl py-8">Reglas</h2>
        <p className=" text-lg pb-3">
          Para cada categoría vas a encontrar seis productos con imagen, título
          y precio. Lo único que tenés que hacer es clickear el más vendido y el
          segundo más vendido. Hay un tiempo límite de
          <strong> diez segundos</strong> para responder. Una vez que elegís un
          producto <strong>no podés cambiarlo</strong>.
        </p>
        <h2 className="text-4xl py-8">Puntaje</h2>
        <p className=" text-lg pb-3">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="flex w-2/4 space-x-11 py-32">
        <Link to="/jugar" className="w-2/4">
          <Button>Jugar</Button>
        </Link>
        <Link to="/puntajes" className="w-2/4">
          <Button>Scoreboard</Button>
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import Button from "../components/Button";
import MasVendido from "../components/MasVendido";

export default function Home() {
  return (
    <div className="w-3/4 flex flex-col items-center">
      <div className="w-full flex flex-col items-center text-left">
        <h1 className="text-6xl py-16 ">
          <p className="bg-yellow-300 py-2 px-3 font-medium -skew-x-6 text-center">
            Mercado Libre Top of Mind
          </p>
        </h1>
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
        <p className=" text-lg pb-3 w-full">
          <ul className=" list-disc px-10">
            <li>
              Cada ronda tiene seis productos con imagen, precio y título de la
              publicación.
            </li>
            <li>
              En cada ronda tenés que hacer click en el más vendido y en el
              segundo más vendido.
            </li>
            <li>
              Una vez elegido un producto, <strong>no se puede cambiar</strong>.
            </li>
            <li>
              Tiempo límite de <strong>20 segundos</strong>.
            </li>
          </ul>
        </p>
        <h2 className="text-4xl py-8">Puntaje</h2>
        <p className=" text-lg pb-3 w-full">
          Ganas puntos con las siguientes reglas:
          <ul className=" list-disc px-8 py-3">
            <li>
              100 puntos por cada producto correcto, sin importar el orden
            </li>
            <li>Puntos extras cuanto más rápido contestes</li>
          </ul>
        </p>
      </div>
      <div className="flex w-2/4 space-x-11 py-28">
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

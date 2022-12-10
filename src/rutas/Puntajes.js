import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Loading from "../components/Loading";

export default function Puntajes() {
  const [puntajes, setPuntajes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      api.puntaje.getPuntajesAltos().then((r) => setPuntajes(r));
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center px-5 lg:px-0">
      <h1 className="text-4xl py-8">Scoreboard</h1>
      {puntajes.length == 0 ? (
        <Loading />
      ) : (
        <div className="w-full lg:w-1/2 bg-yellow-300 shadow-lg border border-yellow-400">
          <table class="items-center text-center w-full text-lg">
            <thead className="text-xl pt-5 border border-yellow-400">
              <th className="py-4">Posición</th>
              <th>Nombre</th>
              <th>Puntaje</th>
            </thead>
            <tbody>
              {puntajes.map((element, index) => {
                return (
                  <tr className={`h-12 text-xl border border-yellow-400`}>
                    <td className="py-2">{index + 1}</td>
                    <td>{element.username}</td>
                    <td>{element.puntaje}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="w-full lg:w-1/2 py-10 flex space-x-4">
        <Link to="/" className="w-2/4">
          <Button>Volver</Button>
        </Link>
        <Link to="/jugar" className="w-2/4">
          <Button>Jugar</Button>
        </Link>
      </div>
    </div>
  );
}

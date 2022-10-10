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

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl py-8">Puntajes Altos</h1>
      {puntajes.length == 0 ? (
        <Loading />
      ) : (
        <div className="p-5 w-3/4 bg-slate-100 rounded-lg shadow-lg">
          <table class="items-center text-center w-full text-lg">
            <thead className="text-xl pt-5">
              <th>Posición</th>
              <th>Nombre</th>
              <th>Puntaje</th>
            </thead>
            <tbody>
              {puntajes.map((element, index) => {
                return (
                  <tr
                    className={`h-12 text-xl ${
                      index < puntajes.length - 1
                        ? "border-b border-slate-400"
                        : ""
                    }`}
                  >
                    <td>{index + 1}</td>
                    <td>{element.username}</td>
                    <td>{element.puntaje}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="w-1/2 py-5">
        <Link to="/jugar" className="w-2/4">
          <Button>Jugar</Button>
        </Link>
      </div>
    </div>
  );
}

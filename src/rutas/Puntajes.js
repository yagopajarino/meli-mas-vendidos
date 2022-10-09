import { useEffect, useState } from "react";
import api from "../api/api";

export default function Puntajes() {
  const [puntajes, setPuntajes] = useState([]);

  useEffect(() => {
    console.log(puntajes);
  }, [puntajes]);

  useEffect(() => {
    api.puntaje.getPuntajesAltos().then((r) => setPuntajes(r));
  }, []);

  return (
    <div>
      <h1>Puntajes</h1>
      {puntajes.length == 0
        ? ""
        : puntajes.map((i) => {
            return (
              <div>
                <p>{i.username}</p>
                <p>{i.puntaje}</p>
              </div>
            );
          })}
    </div>
  );
}

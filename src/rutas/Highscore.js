import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Highscore() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { state } = useLocation();
  const { puntaje, userID } = state; // Read values passed on state

  const savePuntaje = (e) => {
    const data = {
      user_id: userID,
      username: name,
      timestamp: new Date().getTime(),
      puntaje: puntaje,
    };
    api.puntaje.savePuntajeAlto(data);
    navigate("/puntajes");
  };

  return (
    <div>
      <h1>Nuevo puntaje alto</h1>
      <h2>
        Felicitaciones! Obtuviste uno de los 10 puntajes más altos del juego
      </h2>
      <form>
        <input
          placeholder="Nombre"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <h2>{puntaje}</h2>
      </form>
      <div onClick={savePuntaje}>Guardar</div>
    </div>
  );
}

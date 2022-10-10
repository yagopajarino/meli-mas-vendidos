import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api";
import Button from "../components/Button";

export default function Highscore() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { state } = useLocation();
  const { puntaje, userID } = state;

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

  const cancelar = () => {
    navigate("/");
  };

  return (
    <div className="py-5 w-3/4 flex flex-col">
      <h1 className="text-4xl py-5">Nuevo puntaje alto</h1>
      <h2 className="text-2xl">
        Felicitaciones! Obtuviste uno de los 10 puntajes más altos del juego
      </h2>
      <form className="flex my-4 items-center space-x-5">
        <input
          className="border border-slate-400 rounded-lg p-2 text-2xl focus-visible:outline-none"
          placeholder="Nombre"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <h2 className="text-2xl">{puntaje} puntos</h2>
      </form>
      <div className="w-1/3 flex space-x-5 my-5">
        <Button onClick={savePuntaje} disabled={name.length == 0}>
          Guardar
        </Button>
        <Button onClick={cancelar} disabled={false}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}

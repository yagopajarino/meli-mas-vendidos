import { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile.js";
import Button from "../components/Button";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const TIEMPO_LIMITE = 20;

export default function Game() {
  const [category, setCategory] = useState({ id: "", name: "" });
  const [playedCategories, setPlayedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const [selected, setSelected] = useState([]);
  const [tiempo, setTiempo] = useState(-1);
  const [partida, setPartida] = useState();
  const [ronda, setRonda] = useState({});
  const [userID, setUserID] = useState(0);

  const navigate = useNavigate();

  // Efectos de debugeo
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  useEffect(() => {
    console.log(partida);
  }, [partida]);

  useEffect(() => {
    console.log(category);
  }, [category]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  useEffect(() => {
    console.log(products);
  }, [products]);
  //

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function randomCategory() {
    const notPlayed = categories.filter(
      (i) => !playedCategories.includes(i.id)
    );
    return notPlayed[Math.floor(Math.random() * notPlayed.length)];
  }

  // Obtener categorias al montar el Game
  useEffect(() => {
    const awaitCategories = async () => {
      const response = await api.categories.getCategories();
      setCategories(response);
    };
    awaitCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCategory(randomCategory());
    }
  }, [categories]);

  useEffect(() => {
    const awaitProducts = async () => {
      const products = await api.products.getProducts(category.id);
      setProducts(products.sort((a, b) => 0.5 - Math.random()));
      setTiempo(TIEMPO_LIMITE);
    };
    if (category.id != "") {
      awaitProducts();
    }
  }, [category]);

  // Obtener user_id
  useEffect(() => {
    // setUserID(getUserID())
    setUserID(1);
  }, []);

  // Crear partida
  useEffect(() => {
    if (userID != 0) {
      setPartida({
        inicio: new Date().getTime(),
        user_id: userID,
        rondas: [],
      });
    }
  }, [userID]);

  // Crear ronda
  useEffect(() => {
    setRonda({
      inicio_ronda: new Date().getTime(),
      categoria: category,
      clicks: [],
    });
  }, [category]);

  useEffect(() => {
    if (tiempo > 0) {
      const timer = setTimeout(() => {
        setTiempo(tiempo - 1);
      }, 1000);
      if (tiempo == 0 || selected.length == 2) {
        window.clearTimeout(timer);
      }
    }
  }, [tiempo]);

  useEffect(() => {
    if (selected.length == 2) {
      ronda.clicks = selected;
      const p = { ...partida };
      p.rondas = [...p.rondas, ronda];
      setPartida(p);
      api.puntaje.getPuntajeRonda(ronda).then((r) => setPuntaje(puntaje + r));
    }
  }, [selected]);

  function addSelection(e) {
    let node = e.target;
    while (node != e.currentTarget) {
      node = node.parentElement;
    }
    const ids = selected.map((i) => i.id);
    if (!ids.includes(node.id) & (selected.length < 2) & (tiempo != 0)) {
      node.classList.toggle("selected");
      const click = {
        id: node.id,
        timestamp: new Date().getTime(),
      };
      setSelected([...selected, click]);
    }
  }

  function removeSelected() {
    const selecteds = document.querySelectorAll(".selected");
    selecteds.forEach((element) => {
      element.classList.toggle("selected");
    });
  }

  async function nextGame(e) {
    setPlayedCategories([...playedCategories, category.id]);
    setCategory(randomCategory());
    removeSelected();
    setSelected([]);
    setTiempo(-1);
  }

  async function endGame() {
    api.partida.guardar(partida);
    if (api.puntaje.esPuntajeAlto(puntaje)) {
      navigate("/highscore", { state: { puntaje, userID } });
    } else {
      navigate("/puntajes");
    }
  }

  const cont_button = (
    <div className="w-fit my-2">
      <Button onClick={nextGame} disabled={selected.length != 2 && tiempo != 0}>
        Siguente categoría
      </Button>
    </div>
  );

  const finalizar_button = (
    <div className="w-fit my-2">
      <Button onClick={endGame} disabled={selected.length != 2 && tiempo != 0}>
        Finalizar partida
      </Button>
    </div>
  );

  const menu = (
    <div className="absolute flex items-center justify-around backdrop-blur-sm w-full h-full">
      <div className="bg-lime-50 p-24 rounded-md shadow-lg">
        <div className="flex items-start flex-col justify-between space-y-3 mb-5">
          <h1>{category.name}</h1>
          <a
            className="underline underline-offset-2 hover:text-blue-900"
            target="_blank"
            href={`https://www.mercadolibre.com.ar/mas-vendidos/${category.id}`}
          >
            Ver en mercadolibre
          </a>
          <div className="flex flex-row space-x-3">
            <h1 className="text-3xl font-semibold">Puntaje</h1>
            <p className="text-3xl">{puntaje}</p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          {cont_button}
          {finalizar_button}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full bg-gray-200 py-7 flex items-center flex-row justify-center">
        <div className="w-3/4 ">
          <div className="flex items-center justify-between pb-5 space-x-3">
            <p className="text-xl font-light text-slate-700">{category.name}</p>
            <div className="flex items-center justify-between space-x-3 ">
              <h1 className="text-3xl font-semibold">Tiempo</h1>
              <p className="text-3xl w-9">{tiempo == -1 ? "" : tiempo}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 w-full">
            {products.length > 0
              ? products.map((element) => (
                  <ProductTile element={element} onClick={addSelection} />
                ))
              : ""}
          </div>
        </div>
        {selected.length == 2 || tiempo == 0 ? menu : ""}
      </div>
    </>
  );
}

import products from "./products";

const getPuntajeRonda = async (ronda) => {
  const pa = ronda.clicks[0].id;
  const pb = ronda.clicks[1].id;
  const masVendidos = await products.getMasVendidos(ronda.categoria.id);
  const m1 = masVendidos.filter((i) => i.position == 1)[0].product.id;
  const m2 = masVendidos.filter((i) => i.position == 2)[0].product.id;
  const elegidos = [pa, pb];
  const objetivos = [m1, m2];
  const puntos = 100 * objetivos.filter((i) => elegidos.includes(i)).length;
  const inicioRonda = ronda.inicio_ronda;
  const tiempoUltimoClick = Math.max(...ronda.clicks.map((i) => i.timestamp));
  const modificadorTiempo =
    (-1 / 20000) * (tiempoUltimoClick - inicioRonda) + 2;
  return Math.floor(puntos * modificadorTiempo);
};

const esPuntajeAlto = async (puntaje) => {
  const puntajes = await getPuntajesAltos().map((i) => i.puntaje);
  return puntajes.length < 10 || puntaje > puntajes[0];
};

const getPuntajesAltos = async () => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/puntaje`;
  const puntajesAltos = await fetch(url).then((r) => r.json());
  puntajesAltos
    .sort((a, b) => {
      return b.puntaje - a.puntaje;
    })
    .slice(0, 10);
  return puntajesAltos;
};

const savePuntajeAlto = async (data) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/puntaje/nuevo`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  return;
};

const puntaje = {
  getPuntajeRonda,
  esPuntajeAlto,
  getPuntajesAltos,
  savePuntajeAlto,
};

export default puntaje;

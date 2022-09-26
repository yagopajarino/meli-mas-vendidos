const guardar = async (partida) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/partida/guardar`;
  const status = await fetch(url, {
    method: "POST",
    body: JSON.stringify(partida),
    headers: { "Content-Type": "application/json" },
  }).then((r) => r.json());
  return status;
};

const partida = {
  guardar,
};

export default partida;

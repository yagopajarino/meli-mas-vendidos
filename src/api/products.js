const getProducts = async (categoryId) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/productos?id=${categoryId}`;
  const data = await fetch(url).then((r) => r.json());
  return data.map((i) => i.product);
};

const getMasVendidos = async (categoryId) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/productos?id=${categoryId}`;
  const data = await fetch(url).then((r) => r.json());
  return data;
};

const products = {
  getProducts,
  getMasVendidos,
};

export default products;

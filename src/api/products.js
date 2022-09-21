const getProducts = async (categoryId) => {
  const url = `http://localhost:5000/api/v1/productos?id=${categoryId}`;
  const data = await fetch(url).then((r) => r.json());
  return data;
};

const products = {
  getProducts,
};

export default products;

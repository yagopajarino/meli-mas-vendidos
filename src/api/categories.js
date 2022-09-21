const getCategories = async () => {
  const url = "http://localhost:5000/api/v1/categorias/";
  const response = await fetch(url).then((r) => r.json());
  return response;
};

const categories = {
  getCategories,
};

export default categories;

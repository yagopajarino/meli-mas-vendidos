const getCategories = async () => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/categorias/`;
  const response = await fetch(url).then((r) => r.json());
  return response;
};

const categories = {
  getCategories,
};

export default categories;

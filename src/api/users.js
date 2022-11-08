const getUserId = async () => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/users/new`;
  const data = await fetch(url).then((r) => r.json());
  saveUser({ userId: data.id });
  return data;
};

const saveUser = (body) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/users/save`;
  const data = fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((r) => r.json());
  return data;
};

const users = {
  getUserId,
};

export default users;

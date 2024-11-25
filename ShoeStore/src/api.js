const url = "https://6741a18ee4647499008e4a87.mockapi.io/data";

export const fetchShoes = async () => {
  const response = await fetch(url);
  return response.json();
};

export const fetchShoeById = async (id) => {
  const response = await fetch(`${url}/${id}`);
  return response.json();
};

export const updateShoe = async (id, data) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

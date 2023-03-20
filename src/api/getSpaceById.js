import axios from "axios"

async function getSpaceById(id) {
  const { data } = await axios.get(`http://localhost:5000/spaces/${id}`);
  return data;
}

export default getSpaceById;
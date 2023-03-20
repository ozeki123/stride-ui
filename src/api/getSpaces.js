import axios from "axios"

async function getSpaces() {
  const { data } = await axios.get("http://localhost:5000/spaces");
  return data;
}

export default getSpaces;
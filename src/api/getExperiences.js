import axios from "axios"

async function getGroups() {
  const { data } = await axios.get("http://localhost:5000/experiences");
  return data;
}

export default getGroups;
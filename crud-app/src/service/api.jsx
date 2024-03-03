import axios from "axios";
// const Url = "http://localhost:3000/Users";  json
const Url ="http://localhost:8080";



async function postUsers(userdata) {
  try {
    const response = await axios.post(`${Url}/add`, userdata);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
 
async function getUsers() {
  try {
    const response = await axios.get(`${Url}/all`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const getUser = async (id)=>{
  try {
    return axios.get(`${Url}/${id}`);
  } catch (error) {
    console.log(error);
  }
}

const editUser=async (user,id)=>{
  try {
    return await axios.put(`${Url}/${id}`,user)
  } catch (error) {
    console.log(error);
  }
}

const deleteUser = async(id)=>{
  try {
    await axios.delete(`${Url}/${id}`)
  } catch (error) {
    console.log(error);
  }
}


export { postUsers, getUsers ,getUser,editUser ,deleteUser};

import axios from "axios";

const baseUrl = "http://localhost:3001";

const Api = {
  login: `${baseUrl}/users/login`,
  signup: `${baseUrl}/users/create`,
  allProduct: `${baseUrl}/product/all`,
};

const post = async (api, body) => {
  try {
    const response = await axios.post(api, body).then((res) => res.data);
    if (!response.status) throw new Error(response.message);
    return response.data;
  } catch (err) {
    if (err.isAxiosError) {
      const { message } = err.response.data;
      throw new Error(message);
    }
    throw new Error(err.message);
  }
};
const get = async (api) => {
  try {
    const response = await axios.get(api).then((res) => res.data);
    if (!response.status) throw new Error(response.message);
    return response.data;
  } catch (err) {
    if (err.isAxiosError) {
      const { message } = err.response.data;
      throw new Error(message);
    }
    throw new Error(err.message);
  }
};

export { get, post, Api };

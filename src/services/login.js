import { post, Api } from "./api";

const doLogin = async (username, password) => {
  try {
    const response = await post(Api.login, { username, password });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const doSignup = async (username, password, confirmpassword, email) => {
  try {
    const body = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmpassword,
    };
    const response = await post(Api.signup, body);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { doLogin, doSignup };

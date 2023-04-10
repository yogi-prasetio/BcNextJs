import axios from "axios";
import config from "@/pages/config/config";
import { getCookie } from "cookies-next";

const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/user/signup`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};
const read = async () => {
  try {
    const result = await axios.get(`${config.domain}/user/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const getOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/user/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const update = async (data: any) => {
  try {
    const result = await axios.put(`${config.domain}/user/${data.id}`, data);
    return result;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/user/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const signup = async (data: any) => {
  try {
    const result = await axios.post(`${config.domain}/user/daftar`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const signin = async (data: any) => {
  try {
    const result = await axios.post(`${config.domain}/user/signin`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const profile = async () => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getCookie("access_token")}`,
  };
  try {
    const result = await axios.get(`${config.domain}/user/profile`);
    return result;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
  read,
  getOne,
  update,
  deleted,
  signin,
  signup,
  profile,
};

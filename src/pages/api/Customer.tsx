import axios from "axios";
import config from "@/pages/config/config";

const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/customer/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};
const read = async () => {
  try {
    const result = await axios.get(`${config.domain}/customer/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const getOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/customer/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const update = async (data: any) => {
  try {
    const result = await axios.put(
      `${config.domain}/customer/${data.id}`,
      data
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/customer/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, read, getOne, update, deleted };

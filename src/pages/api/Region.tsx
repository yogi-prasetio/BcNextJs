import axios from "axios";

const Read = async () => {
  try {
    const result = await axios.get("http://localhost:6661/region/");
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:6661/region/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(
      "http://localhost:6661/region/" + payload.id,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const Delete = async (id: any) => {
  try {
    const result = await axios.delete("http://localhost:6661/region/" + id);
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get("http://localhost:6661/region/" + id);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  Read,
  Create,
  Update,
  Delete,
  findData,
};

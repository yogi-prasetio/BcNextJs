import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import ProductApi from "../api/Product";
import { useDispatch, useSelector } from "react-redux";
import {
  EditProductRequest,
  FindProductRequest,
} from "../../redux-saga/action/ProductAction";
import Image from "next/image";

export default function ProductUpdateForm(props: any) {
  const dispatch = useDispatch();
  const { product } = useSelector((state: any) => state.productState);
  const [previewImg, setPreviewImg] = useState<any>();
  const [upload, setUpload] = useState<any>(false);
  useEffect(() => {
    dispatch(FindProductRequest(props.id));
  }, [dispatch, props.id]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      name: product.name,
      description: product.description,
      price: product.price,
      file: product.image,
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("id", values.id);
      payload.append("name", values.name);
      payload.append("description", values.description);
      payload.append("price", values.price);
      payload.append("file", values.file);

      dispatch(EditProductRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Updated.");
      props.setRefresh(true);
    },
  });
  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImg(null);
    setUpload(false);
  };
  return (
    <div>
      <nav className="flex m-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Update Product
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="m-8 block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col item-center">
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.name}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="namdescriptione"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.price}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="m-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Photo
          </label>
          <div className="mt-2 flex justify-center text-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {upload === false ? (
              <>
                <span></span>
              </>
            ) : (
              <>
                <img src={previewImg} alt="img" height={50} width={50} />
                <br />
                <span
                  onClick={onClear}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Remove
                </span>
                <br />
              </>
            )}
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-dark font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              {/* <span>Upload a file </span> */}
              <input
                id="file-upload"
                className="mb-3"
                name="file-upload"
                type="file"
                onChange={uploadConfig("file")}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-row items-end my-4 mx-4">
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => props.setDisplay(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => formik.handleSubmit()}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

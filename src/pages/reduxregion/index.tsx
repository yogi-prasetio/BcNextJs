import React, { useEffect, useState } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import {
  GetRegionRequest,
  DeleteRegionRequest,
} from "../../redux-saga/action/RegionAction";
import Region from "../api/Region";
import RegionUpdateForm from "./RegionUpdateForm";
import RegionCreateForm from "./RegionCreateForm";

export default function RegionRedux() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  let [refrash, setRefrash] = useState<any>(false);
  const { regions } = useSelector((state: any) => state.regionState);
  const [displayUpdate, setDisplayUpdate] = useState<any>(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetRegionRequest());
  }, [dispatch, refrash]);

  const onUpdate = (id: any) => {
    setDisplayUpdate(true);
    setId(id);
  };

  const onDelete = async (id: any) => {
    dispatch(DeleteRegionRequest(id));
    setRefrash(true);
    window.alert("Data successfully deleted");
  };
  return (
    <div>
      <Layout>
        <>
          {displayUpdate ? (
            <RegionUpdateForm
              setRefrash={setRefrash}
              setDisplay={setDisplayUpdate}
              id={id}
            />
          ) : display ? (
            <RegionCreateForm setRefrash={setRefrash} setDisplay={setDisplay} />
          ) : (
            <>
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
                        Region
                      </a>
                    </div>
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
                      <button
                        className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 mt-3 mb-3"
                        onClick={() => setDisplay(true)}
                      >
                        {" "}
                        Add Region{" "}
                      </button>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="container m-8">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th scope="col" className="px-6 py-3">
                          Region ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Region Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {regions &&
                        regions.map((item: any) => {
                          return (
                            <>
                              <tr
                                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                key={item.regionId}
                              >
                                <th scope="row" className="px-6 py-4">
                                  {item.regionId}
                                </th>
                                <td className="px-6 py-4">{item.regionName}</td>
                                <td className="px-6 py-4">
                                  <button
                                    type="submit"
                                    onClick={() => onUpdate(item.regionId)}
                                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    type="submit"
                                    onClick={() => onDelete(item.regionId)}
                                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}

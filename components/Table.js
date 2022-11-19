import React, { useState } from "react";
import { useRouter } from "next/router";

const Table = ({ buySpace }) => {
  const [selectSpace, setSelectSpace] = useState(0);
  const [sellSpaceG, setSellSpaceG] = useState("");

  const router = useRouter();

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Airlines</th>
            <th>Dept.Time</th>
            <th></th>
            <th>{!buySpace ? "Providers" : "Sell Space (g)"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Indigo</div>
                  <div className="text-sm opacity-50">IND5960</div>
                </div>
              </div>
            </td>
            <td>
              19:26
              <br />
              <span className="badge badge-ghost badge-sm">
                Arrival: 2:30 (+1)
              </span>
            </td>
            <td>
              <div className="mask mask-squircle w-24 h-24">
                <img
                  src="https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </td>
            <th className="space-x-5 space-y-5">
              {selectSpace ? (
                <div>
                  <input
                    // value={sellSpaceG}
                    onChange={(e) => setSellSpaceG(e.target)}
                    type="number"
                    className="input input-bordered"
                  />
                </div>
              ) : (
                <></>
              )}
              {!buySpace ? (
                <button
                  onClick={router.push("/providers")}
                  className="btn btn-primary btn-xs"
                >
                  Show Providers
                </button>
              ) : (
                <button
                  onClick={() => {
                    selectSpace
                      ? (function () {
                          setSelectSpace(0);
                          alert("Set Successfully");
                        })()
                      : setSelectSpace(1);
                  }}
                  className="btn btn-primary btn-xs"
                >
                  Sell Space
                </button>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

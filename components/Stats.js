import React from "react";

const Stats = ({ dateTime, query, buySpace, setBuySpace }) => {
  return (
    <div className="stats shadow stats-vertical m-5">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">May 2022, Sat</div>
        <div className="stat-value">28</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Departure</div>
        <div className="stat-value">{query.DepAir}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Destination</div>
        <div className="stat-value">{query.DesAir}</div>
      </div>
      <div className="stat">
        <div className="stat-value">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Want Space</span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-red-500"
                onChange={() => setBuySpace(0)}
                checked={!buySpace}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Sell Space</span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
                onChange={() => setBuySpace(1)}
                checked={buySpace}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

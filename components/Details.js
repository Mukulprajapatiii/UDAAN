import React from "react";

const Details = ({ state, setState, onSubmit }) => {
  return (
    <div className="register-main">
      <div
      id="secondSection"
      className="">
      <h3 className="reg-head">Enter your Flight Details</h3>
        <div className="reg-cont">
          <div className="py-4">

            <div className="flex flex-col space-y-5 w-110">
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  value={state.Fname}
                  onChange={(e) => setState({ ...state, Fname: e.target.value })}
                  className="input input-bordered input-primary rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={state.Lname}
                  onChange={(e) => setState({ ...state, Lname: e.target.value })}
                  className="input input-bordered input-primary rounded-lg"
                />
              </div>
              
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
            <input
              type="text"
              placeholder="Departure Airport"
              value={state.DepAir}
              onChange={(e) => setState({ ...state, DepAir: e.target.value })}
              className="input input-bordered input-primary rounded-lg"
            />
            <input
              type="text"
              placeholder="Destination Airport"
              value={state.DesAir}
              onChange={(e) => setState({ ...state, DesAir: e.target.value })}
              className="input input-bordered input-primary rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
            <input
              type="number"
              placeholder="Mobile Number"
              value={state.Number}
              onChange={(e) => setState({ ...state, Number: e.target.value })}
              className="input input-bordered input-primary rounded-lg"
            />
            <input
              type="date"
              placeholder="Departure Airport"
              onChange={(e) => setState({ ...state, DateTime: e.target.value })}
              className="input input-bordered input-primary rounded-lg"
            />
          </div>
          <div className="flex justify-items flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-3 w-full">
            <button onClick={onSubmit} className="reg-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
  );
};

export default Details;

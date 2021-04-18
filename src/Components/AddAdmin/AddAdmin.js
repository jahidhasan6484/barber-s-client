import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = () => {
    const admin = { ...info };
    fetch("https://infinite-garden-56670.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <div className="container addAdmin">
            <div className="row">
              <div
                className="col-md-10 p-4 pr-5"
                style={{
                  position: "absolute",
                  right: 0
                }}
              >
                <h3>Make Admin</h3>
                <br></br>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input
                      onBlur={handleBlur}
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      onBlur={handleBlur}
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn__primary"
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;

import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Services = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("price", info.price);

    fetch("https://infinite-garden-56670.herokuapp.com/addAService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <section className="container-fluid row">
            <div
              className="col-md-10 p-4 pr-5"
              style={{
                position: "absolute",
                right: 0
              }}
            >
              <h3 className="text-brand">Add a Service</h3>
              <br></br>
              <form onSubmit={handleSubmit}>
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
                  <label htmlFor="exampleInputPassword1">Price</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="Price"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Upload a image</label>
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Picture"
                  />
                </div>
                <button type="submit" className="btn__primary">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({});

    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    };

    const handleSubmit = () => {
        const reviewDetails = { ...review, email: loggedInUser.email };
        fetch("https://infinite-garden-56670.herokuapp.com/addReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewDetails),
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-md-10 p-4 pr-5"
                                style={{
                                    position: "absolute",
                                    right: 0
                                }}
                            >
                                <h3>Review</h3>
                                <br></br>
                                <form>
                                    <div className="form-group">
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            className="form-control"
                                            name="company"
                                            placeholder="Company's name and Designation"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            className="form-control"
                                            name="description"
                                            placeholder="Description"
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

export default AddReview;
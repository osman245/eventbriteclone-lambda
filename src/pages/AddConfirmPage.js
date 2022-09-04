import React from "react";
export const AddConfirmPage = () => {
  return (
    <div className="w-70 my-5 mt-4 container">
      <div className=" card p-3 ">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            backgroundColor: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="checkmark ml-5">✓</i>
        </div>
        <div className="card-body">
          <h1 className=" text-success text-center">Success</h1>
          <h5 className=" text-center ">Your new Event has been created!</h5>
          <div className="d-flex justify-content-center">
            {" "}
            <a href="/" className="btn btn-success text-white">
              HomePage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

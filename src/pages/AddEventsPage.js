import { useState } from "react";
import axios from "axios";
import { useFetch } from "../components/useFetch";
import FormData from "form-data";
import React from "react";
import { useHistory } from "react-router-dom";

export const AddEventsPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [pricePerTicket, setPricePerTicket] = useState(0);
  const [eventDesc, setEventDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [localImage, setLocalImage] = useState("");

  const axios = require("axios");
  const data = { imageUrl, name, date, pricePerTicket, eventDesc };
  const history = useHistory();

  const imageSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    var imageFile = document.querySelector("#file");
    formData.append("file", imageFile.files[0]);

    axios
      .put("http://localhost:3000/dev/todos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => setImageUrl(response.data.publicUrl));
    console.log("imageUrl:" + imageUrl);
    setTimeout(handleSubmit(e), 2000);
  };

  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: "http://localhost:3000/dev/todos",
      data: data,
    }).then(() => {
      console.log("new data");
    });
    history.push("/addEventConfirm");
    setLocalImage("");
    setDate("");
    setPricePerTicket(0);
    setEventDesc("");
    setName("");
    setImageUrl("");
  };

  return (
    <>
      <div className="d-flex align-content-center justify-content-center mx-5 my-5">
        <div className="   card text-dark  p-3">
          <div className="card-body">
            <h3 className="card-title text-center"> Create Event</h3>
            <hr className="w-50" />

            <form onSubmit={imageSubmit}>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput1">Event Name</label>
                    <input
                      type="name"
                      value={name}
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      id="exampleFormControlInput1"
                      placeholder="EventName"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput2">Event Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="Choose Image"
                      required
                    />
                    <div className="invalid-feedback">
                      Date of event is required
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group" id="imageForm">
                <label className="mt-3 mr-3" htmlFor="imageSrc ">
                  Upload Image:
                </label>
                <input
                  id="file"
                  type="file"
                  value={localImage}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setLocalImage(e.target.value);
                  }}
                  accept="image/*"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput3 ">
                  Price of One Ticket:
                </label>
                <select
                  value={pricePerTicket}
                  onChange={(e) => {
                    console.log();
                    setPricePerTicket(e.target.value);
                  }}
                  className="form-select ml-3 mt-2"
                  id="inputGroupSelect02"
                  required
                >
                  <option value="5">$5.00</option>
                  <option value="6">$6.00</option>
                  <option value="7">$7.00</option>
                  <option value="8">$8.00</option>
                  <option value="9">$9.00</option>
                  <option value="10">$10.00</option>
                  <option value="11">$11.00</option>
                  <option value="12">$12.00</option>
                  <option value="13">$13.00</option>
                  <option value="14">$14.00</option>
                  <option value="15">$15.00</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Event Description
                </label>
                <textarea
                  value={eventDesc}
                  onChange={(e) => setEventDesc(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                name="myButton"
                id="myButton"
                type="submit"
                className="btn btn-primary btn-md"
              >
                Register Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

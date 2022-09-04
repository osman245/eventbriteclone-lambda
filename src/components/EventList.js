import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
export const EventList = ({ mockEvents }) =>
  mockEvents.map(({ id, name, date, pricePerTicket, eventDesc, imageUrl }) => {
    return (
      <div className="col-12 col-lg-4 col-md-6 mb-4" key={id}>
        <div className="event card w-70" key={id}>
          <img
            src={imageUrl}
            width="200"
            height="300"
            className="card-img-top"
            alt=""
            style={{ height: "300px" }}
          />
          <div className="card-body text-dark">
            <h3 className="card-title ml-0">{name}</h3>
            <h5 className="text-warning my-3">{date}</h5>
            <p className="text-muted my-2">${pricePerTicket}</p>
            <p className="card-text mt-4">{eventDesc}</p>
            <div className="mt-4">
              <a
                href={`/userticket/${id}`}
                className="float-right btn btn-primary"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

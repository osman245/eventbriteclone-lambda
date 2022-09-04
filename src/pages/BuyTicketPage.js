import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { CartList } from "../components/CartList";
import { useParams } from "react-router";
import { useFetch } from "../components/useFetch";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export const BuyTicketPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState(0);

  const [count, setCount] = useState(0);
  const { id } = useParams();

  const url = `http://localhost:3000/dev/todos/` + id;

  const { data, error, isPending } = useFetch(url);
  const history = useHistory();

  const userData = {
    id,
    quantity,
    email,
    fName,
    lName,
    address,
    country,
    province,
    zip,
    nameOnCard,
    cardNumber,
    expiration,
    cvv,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/buyTicketConfirm");
    const url = "http://localhost:3000/dev/todos/userticket";
    axios({
      method: "post",
      url: url,
      data: userData,
    }).catch((err) => console.log("input appropriate values"));

    setQuantity("");
    setEmail("");
    setFName("");
    setLName("");
    setAddress("");
    setCountry("");
    setProvince("");
    setZip("");
    setNameOnCard("");
    setCardNumber("");
    setExpiration("");
    setCVV("");
  };

  return (
    <div className="bg-light">
      {data && (
        <div className="container">
          <div className="  py-4 text-center">
            <h2 className="">Purchase Tickets</h2>
            <hr className="border-bottom border-dark w-50" />
          </div>

          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">
                  {quantity}
                </span>
              </h4>
              <ul className="list-group mb-3">
                <CartList
                  quantity={quantity}
                  name={data.name}
                  pricePerTicket={data.pricePerTicket}
                />

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${data.pricePerTicket * quantity}</strong>
                </li>
              </ul>
            </div>

            <div className="col-md-8 order-md-1">
              <h3></h3>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput3 ">Quantity:</label>
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="form-select ml-3 mt-2"
                  id="quantity"
                  required
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <h4 className="mb-3">Billing address</h4>

              <form onSubmit={(e) => handleSubmit(e)} class="needs-validation">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                      onChange={(e) => setFName(e.target.value)}
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value={fName}
                      pattern="[a-zA-Z]+"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      onChange={(e) => setLName(e.target.value)}
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value={lName}
                      pattern="[a-zA-Z]+"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">
                    Email <span class="text-muted">(Optional)</span>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    value={address}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select
                      onChange={(e) => setCountry(e.target.value)}
                      className="custom-select d-block w-100"
                      id="country"
                      value={country}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Canada</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="province">Province/Territories</label>
                    <select
                      onChange={(e) => setProvince(e.target.value)}
                      className="custom-select d-block w-100"
                      id="state"
                      value={province}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Ontario</option>
                      <option>Quebec</option>
                      <option>Manitoba</option>
                      <option>Saskatchewan</option>
                      <option>British Columbia</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      onChange={(e) => setZip(e.target.value)}
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      value={zip}
                      pattern="[a-zA-Z0-9]{3}\s[a-zA-Z0-9]{3}"
                      required
                    />
                    <div className="invalid-feedback">
                      Zip code required. Ensure there is a space between the
                      alphanumeric digits at the third digit
                    </div>
                  </div>
                </div>

                <hr className="mb-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                      onChange={(e) => setNameOnCard(e.target.value)}
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      value={nameOnCard}
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Card Number</label>
                    <input
                      onChange={(e) => {
                        setCardNumber(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      value={cardNumber}
                      required
                    />
                    <div className="invalid-feedback">
                      card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input
                      onChange={(e) => {
                        setExpiration(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      value={expiration}
                      required
                      pattern="[0-9]{2}/[0-9]{2}"
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input
                      onChange={(e) => {
                        setCVV(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      value={cvv}
                      pattern="[0-9]{3}"
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Purchase
                </button>
              </form>
            </div>
          </div>

          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2021 EventBrite</p>
            <ul className="list-inline">
              <li className="list-inline-item">Privacy</li>
              <li className="list-inline-item">Terms</li>
              <li className="list-inline-item">Support</li>
            </ul>
          </footer>
        </div>
      )}
    </div>
  );
};

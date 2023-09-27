/* eslint-disable jsx-a11y/img-redundant-alt */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

//Imports
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import ToggleButton from "react-bootstrap/ToggleButton";
// import { Alert } from "react-bootstrap";
// import Image from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
// import fs from "fs-extra";
// import puppeteer from "puppeteer";
import Receipt from "./receipt";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

const Payment = () => {
  const [name, setName] = useState("Rajan");
  const [email, setEmail] = useState("rajan@example.com");
  const [phone_number, setPhone_number] = useState("9191919191");
  const [receiptData, setReceiptData] = useState({ studentName: "John Smith" });
  const [isPayFeesDisabled, setIsPayFeesDisabled] = useState(false);
  const [isShowReceiptDisabled, setIsShowReceiptDisabled] = useState(true);

  async function displayRazorpay() {
    alert("Razorpay dialog Box");

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_tUMKcuscRgNg8x" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      image: "http://localhost:1337/favicon.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        setReceiptData(response);
        setIsPayFeesDisabled(!isPayFeesDisabled);
        setIsShowReceiptDisabled(!isShowReceiptDisabled);
      },
      prefill: {
        name,
        email,
        phone_number,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <Fragment>
      {/* <Header /> */}
      {/* <PageHeader title={"Payment"} curPage={"Sign Up"} /> */}
      <>
        <div className="form-group text-center" style={{ margin: "5vh" }}>
          <button
            className="d-block lab-btn"
            onClick={displayRazorpay}
            disabled={isPayFeesDisabled}
          >
            <span>Pay Fees</span>
          </button>
        </div>
        <Receipt data={receiptData} isDisabled={isShowReceiptDisabled} />
      </>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Payment;

/* eslint-disable jsx-a11y/img-redundant-alt */
import { Fragment } from "react";
// import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

//Imports
import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import ToggleButton from "react-bootstrap/ToggleButton";
import { Alert } from "react-bootstrap";
// import Image from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SignupPage = () => {
  const [validated, setValidated] = useState(false);

  const [aadhaarPdfError, setAadhaarPdfError] = useState(false);
  const [passportImageError, setPassportImageError] = useState(false);
  const [signatureImageError, setsignatureImageError] = useState(false);
  const [std10MarksheetPdfError, setStd10MarksheetPdfError] = useState(false);
  const [std12MarksheetPdfError, setStd12MarksheetPdfError] = useState(false);
  const [graduationMarksheetPdfError, setGraduationMarksheetPdfError] =
    useState(false);
  const [valiHayatPdfError, setValiHayatPdfError] = useState(false);
  const [castePdfError, setCastePdfError] = useState(false);

  const [passportImagePreview, setPassportImagePreview] = useState(null);
  const [signatureImagePreview, setSignatureImagePreview] = useState(null);

  const handlePassportImageChange = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile && /(jpe?g|png)$/i.test(imageFile.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassportImagePreview(reader.result);
      };
      reader.readAsDataURL(imageFile);
      setPassportImageError("");
    } else {
      setPassportImagePreview(null);
      setPassportImageError("Please select a JPEG or PNG file");
    }
  };

  const handleSignatureImageChange = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile && /(jpe?g|png)$/i.test(imageFile.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignatureImagePreview(reader.result);
      };
      reader.readAsDataURL(imageFile);
      setsignatureImageError("");
    } else {
      setSignatureImagePreview(null);
      setsignatureImageError("Please select a JPEG or PNG file");
    }
  };

  const handleAadhaarPdfChange = (event) => {
    const pdfFile = event.target.files[0];

    if (pdfFile && /\.pdf$/i.test(pdfFile.name)) {
      setAadhaarPdfError("");
    } else {
      setAadhaarPdfError("Please select a PDF file");
    }
  };

  const handleStd10MarksheetPdfChange = (event) => {
    const pdfFile = event.target.files[0];

    if (pdfFile && /\.pdf$/i.test(pdfFile.name)) {
      setStd10MarksheetPdfError("");
    } else {
      setStd10MarksheetPdfError("Please select a PDF file");
    }
  };

  const handleStd12MarksheetPdfChange = (event) => {
    const pdfFile = event.target.files[0];

    if (pdfFile && /\.pdf$/i.test(pdfFile.name)) {
      setStd12MarksheetPdfError("");
    } else {
      setStd12MarksheetPdfError("Please select a PDF file");
    }
  };

  const handleGraduationMarksheetPdfChange = (event) => {
    const pdfFile = event.target.files[0];

    if (pdfFile && /\.pdf$/i.test(pdfFile.name)) {
      setGraduationMarksheetPdfError("");
    } else {
      setGraduationMarksheetPdfError("Please select a PDF file");
    }
  };

  const handleValiHayatPdfChange = (event) => {
    const pdfFile = event.target.files[0];

    if (pdfFile && /\.pdf$/i.test(pdfFile.name)) {
      setValiHayatPdfError("");
    } else {
      setValiHayatPdfError("Please select a PDF file");
    }
  };

  const handleCastePdfChange = (event) => {
    const pdfFile = event.target.files[0];

    if (pdfFile && /\.pdf$/i.test(pdfFile.name)) {
      setCastePdfError("");
    } else {
      setCastePdfError("Please select a PDF file");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      aadhaarPdfError === "" &&
      passportImageError === "" &&
      signatureImageError === "" &&
      std10MarksheetPdfError === "" &&
      std12MarksheetPdfError === "" &&
      graduationMarksheetPdfError === "" &&
      valiHayatPdfError === "" &&
      castePdfError === ""
    ) {
      console.log("Success");
      // console.log(event);
    } else {
      console.log(`Faliure`);
    }

    // Submit the form
    // event.target.submit();
    setValidated(true);
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Upload"} curPage={"Sign Up"} />
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className=""
        style={{ padding: "5vh" }}
      >
        {/* Passport photo */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6" style={{ paddingBottom: "1vh" }}>
            <Form.Label>
              પાસપોર્ટ સાઈઝનો ફોટો (એક MB થી ઓછી સાઈઝ) (JPEG or PNG Format)
            </Form.Label>
            <Form.Control
              type="file"
              id="passportImage"
              accept="image/jpeg, image/png"
              onChange={handlePassportImageChange}
              required
            />
            {passportImagePreview && (
              <img
                src={passportImagePreview}
                alt="Image 1"
                style={{
                  maxWidth: "20vw",
                  maxHeight: "20vh",
                  marginTop: "1rem",
                }}
              />
            )}
            {passportImageError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {passportImageError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* Signature photo */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6" style={{ paddingBottom: "1vh" }}>
            <Form.Label>
              વિદ્યાર્થીની સહી (50 KB થી ઓછી) (JPEG or PNG Format)
            </Form.Label>
            <Form.Control
              type="file"
              id="signatureImage"
              accept="image/jpeg, image/png"
              onChange={handleSignatureImageChange}
              required
            />
            {signatureImagePreview && (
              <img
                src={signatureImagePreview}
                alt="Image 2"
                style={{
                  maxWidth: "20vw",
                  maxHeight: "20vh",
                  marginTop: "1rem",
                }}
              />
            )}
            {signatureImageError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {signatureImageError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* Aadhaar pdf */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            style={{
              paddingBottom: "1vh",
            }}
          >
            <Form.Label>આધાર કાર્ડ (PDF Format)</Form.Label>
            <Form.Control
              type="file"
              id="aadhaarPdf"
              accept="application/pdf"
              required
              onChange={handleAadhaarPdfChange}
              md="6"
            />
            {aadhaarPdfError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {aadhaarPdfError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* std. 10th  pdf */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            style={{
              paddingBottom: "1vh",
            }}
          >
            <Form.Label>ધોરણ 10 માર્કશીટ (PDF Format)</Form.Label>
            <Form.Control
              type="file"
              id="std10MarksheetPdf"
              accept="application/pdf"
              required
              onChange={handleStd10MarksheetPdfChange}
              md="6"
            />
            {std10MarksheetPdfError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {std10MarksheetPdfError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* std. 12th  pdf */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            style={{
              paddingBottom: "1vh",
            }}
          >
            <Form.Label>ધોરણ 12 માર્કશીટ (PDF Format)</Form.Label>
            <Form.Control
              type="file"
              id="std12MarksheetPdf"
              accept="application/pdf"
              required
              onChange={handleStd12MarksheetPdfChange}
              md="6"
            />
            {std12MarksheetPdfError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {std12MarksheetPdfError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* Graduation  pdf */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            style={{
              paddingBottom: "1vh",
            }}
          >
            <Form.Label>ગ્રેજ્યુએશન માર્કશીટ (PDF Format)</Form.Label>
            <Form.Control
              type="file"
              id="graduationMarksheetPdf"
              accept="application/pdf"
              required
              onChange={handleGraduationMarksheetPdfChange}
              md="6"
            />
            {graduationMarksheetPdfError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {graduationMarksheetPdfError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* parent's alive? pdf */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            style={{
              paddingBottom: "1vh",
            }}
          >
            <Form.Label>
              વાલી હયાત ન હોય તો, મરણનો દાખલો (PDF Format)
            </Form.Label>
            <Form.Control
              type="file"
              id="valiHayatPdf"
              accept="application/pdf"
              required
              onChange={handleValiHayatPdfChange}
              md="6"
            />
            {valiHayatPdfError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {valiHayatPdfError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* caste pdf */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            style={{
              paddingBottom: "1vh",
            }}
          >
            <Form.Label>જાતિનો દાખલો (PDF Format)</Form.Label>
            <Form.Control
              type="file"
              id="castePdf"
              accept="application/pdf"
              required
              onChange={handleCastePdfChange}
              md="6"
            />
            {castePdfError && (
              <Alert
                variant="danger"
                style={{ padding: "1vh", marginTop: "1vh" }}
              >
                {castePdfError}
              </Alert>
            )}
          </Form.Group>
        </Row>

        {/* Submit button */}
        {/* <Button type="submit" style={{ alignItems: "center" }}>
          Submit
        </Button> */}
        <div className="form-group text-center">
          <button className="d-block lab-btn" type="submit">
            <span>UPLOAD</span>
          </button>
        </div>
      </Form>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;

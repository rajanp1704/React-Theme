import { Fragment } from "react";
// import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

//Imports
import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import ToggleButton from "react-bootstrap/ToggleButton";

const AddmissionForm = () => {
  const [validated, setValidated] = useState(false);
  const [aadhar, setAadhar] = useState("");
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    addressHouse: "",
    addressSoceity: "",
    addressCity: "",
    addressZip: "",
    addressDistrict: "",
    addressState: "",
    permanent_address: "",
    permanent_addressHouse: "",
    permanent_addressSoceity: "",
    permanent_addressCity: "",
    permanent_addressZip: "",
    permanent_addressDistrict: "",
    permanent_addressState: "",
    education: "",
    student_phone: "",
    parents_phone: "",
    parents_available: "",
    birth_date: "",
    category: "",
    terms_and_condition: false,
  });

  const handleAadhaarNumber = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = inputValue.replace(/(\d{4})/g, "$1 "); // Insert space after every four digits

    // setValue(formattedValue.slice(0, 19)); // Limit input to 16 digits
    setAadhar(formattedValue.slice(0, 19));

    // Additional logic can be added here to handle the formatted value
  };

  const handleChange = (props) => (e) => {
    e.preventDefault();
    setData({ ...data, [props]: e.target.value });
  };

  const handleChangeTC = (e) => {
    e.preventDefault();
    console.log(e);
    setData({ ...data, terms_and_condition: e.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const {
    //   first_name,
    //   last_name,
    //   email,
    //   education,
    //   student_phone,
    //   parents_phone,
    //   parents_available,
    //   birth_date,
    //   category,
    //   terms_and_condition,
    // } = data;

    // const requestData = {
    //   first_name,
    //   last_name,
    //   email,
    //   address: `${data.addressHouse}, ${data.addressSoceity}, ${data.addressCity}, ${data.addressDistrict}, ${data.addressState}, ${data.addressZip}`,
    //   permanent_address: `${data.permanent_addressHouse}, ${data.permanent_addressSoceity}, ${data.permanent_addressCity}, ${data.permanent_addressDistrict}, ${data.permanent_addressState}, ${data.permanent_addressZip}`,
    //   education,
    //   student_phone,
    //   parents_phone,
    //   parents_available,
    //   birth_date,
    //   category,
    //   terms_and_condition,
    // };
    console.log(data);
    // console.log(aadhar);

    // console.log(requestData);
    // const form = event.currentTarget;
    // const abc = new FormData(form);
    // console.log(abc);
    // console.log(form);
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    setValidated(true);
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Addmission Form"} curPage={"Sign Up"} />

      {/* start */}
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper" style={{ textAlign: "left" }}>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="account-form"
              // style={{ padding: "5vh" }}
            >
              {/* Full Name */}
              {/* <Row className="mb-3"> */}
              <h6>Full Name</h6>

              <Form.Group
                as={Col}
                // md="3"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={data.first_name}
                  onChange={handleChange(`first_name`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="3"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={data.last_name}
                  onChange={handleChange(`last_name`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Address */}
              {/* <Row className="mb-3"> */}
              <h6>Address</h6>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="House/Flat No."
                  value={data.addressHouse}
                  onChange={handleChange(`addressHouse`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="8"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Society & Street"
                  value={data.addressSoceity}
                  onChange={handleChange(`addressSoceity`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="City/Village"
                  value={data.addressCity}
                  onChange={handleChange(`addressCity`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}
              {/* <Row className="mb-3"> */}
              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Zip"
                  value={data.addressZip}
                  onChange={handleChange(`addressZip`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="District"
                  value={data.addressDistrict}
                  onChange={handleChange(`addressDistrict`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="State"
                  value={data.addressState}
                  onChange={handleChange(`addressState`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Permanent address */}
              {/* <Row className="mb-3"> */}
              <h6>Permanent Address</h6>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="House/Flat No."
                  value={data.permanent_addressHouse}
                  onChange={handleChange(`permanent_addressHouse`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="8"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Society & Street"
                  value={data.permanent_addressSoceity}
                  onChange={handleChange(`permanent_addressSoceity`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="City/Village"
                  value={data.permanent_addressCity}
                  onChange={handleChange(`permanent_addressCity`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}
              {/* <Row className="mb-3"> */}
              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Zip"
                  value={data.permanent_addressZip}
                  onChange={handleChange(`permanent_addressZip`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="District"
                  value={data.permanent_addressDistrict}
                  onChange={handleChange(`permanent_addressDistrict`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                // md="2"
                controlId="validationCustom02"
                style={{ paddingBottom: "1vh" }}
              >
                {/* <Form.Label>Last name</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  placeholder="State"
                  value={data.permanent_addressState}
                  onChange={handleChange(`permanent_addressState`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Education */}
              {/* <Row className="mb-3"> */}
              <h6>Education</h6>

              <Form.Group
                as={Col}
                // md="4"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Select
                  aria-label="Default select example"
                  required
                  placeholder="select education..."
                  value={data.category}
                  onChange={handleChange(`category`)}
                >
                  <option>10th (S.S.C)</option>
                  <option>12th (H.S.C)</option>
                  <option>Graduation</option>
                  <option>Post-Graduation</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Aadhar */}
              {/* <Row className="mb-3"> */}
              <h6>Aadhar Card number</h6>

              <Form.Group
                as={Col}
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  aria-label="aadhar"
                  placeholder="Aadhar number (XXXX XXXX XXXX XXXX)"
                  value={aadhar}
                  onChange={handleAadhaarNumber}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Email */}
              {/* <Row className="mb-3"> */}
              <h6>Email</h6>

              <Form.Group
                as={Col}
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="abc@xyz.com"
                  value={data.email}
                  onChange={handleChange(`email`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* DOB */}
              {/* <Row className="mb-3"> */}
              <h6>Date of Birth</h6>

              <Form.Group
                as={Col}
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="date"
                  placeholder="MM/DD/YYYY"
                  value={data.birth_date}
                  onChange={handleChange(`birth_date`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Student Mob. */}
              {/* <Row className="mb-3"> */}
              <h6>Student's Mobile</h6>

              <Form.Group
                as={Col}
                // md="4"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="contact number"
                  value={data.student_phone}
                  onChange={handleChange(`student_phone`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Parent Mob. */}
              {/* <Row className="mb-3"> */}
              <h6>Parent's Mobile</h6>

              <Form.Group
                as={Col}
                // md="4"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="contact number"
                  value={data.parents_phone}
                  onChange={handleChange(`parents_phone`)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Category */}
              {/* <Row className="mb-3"> */}
              <h6>Category</h6>

              <Form.Group
                as={Col}
                // md="4"
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Select
                  aria-label="Default select example"
                  required
                  placeholder="select a categogy..."
                  value={data.category}
                  onChange={handleChange(`category`)}
                >
                  <option>Talati</option>
                  <option>Police</option>
                  <option>Special Batch</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Parent alive? */}
              {/* <Row className="mb-3"> */}
              <h6>વાલી હયાત છે?</h6>

              <Form.Group
                as={Col}
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Check.Input
                  required
                  name="group1"
                  type="radio"
                  value="No"
                  checked={data.parents_available === "No"}
                  onChange={handleChange(`parents_available`)}
                />
                <Form.Check.Label
                  style={{ paddingLeft: "1vw" }}
                >{`ના`}</Form.Check.Label>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="validationCustom01"
                style={{ paddingBottom: "1vh" }}
              >
                <Form.Check.Input
                  required
                  name="group1"
                  type="radio"
                  value="Yes"
                  checked={data.parents_available === "Yes"}
                  onChange={handleChange(`parents_available`)}
                />
                <Form.Check.Label
                  style={{ paddingLeft: "1vw" }}
                >{`હા`}</Form.Check.Label>

                <Form.Control.Feedback type="invalid">
                  Select any One!
                </Form.Control.Feedback>
              </Form.Group>
              {/* </Row> */}

              {/* Rules  */}
              {/* <Row className="mb-3"> */}
              <div
                className="col"
                style={{
                  paddingBottom: "1vh",
                  fontWeight: "800",
                  fontSize: "2.5vh",
                  lineHeight: "3.5vh",
                }}
              >
                <h6 style={{ textAlign: "center" }}>Rules & Regulations</h6>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  1. કોરોના મહામારી અન્વયની ગાઈડ-લાઈન નું પાલન કરવુ.
                </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  2. ફરજિયાત માસ્ક પહેરવું.
                </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  3. નિયત કરેલી પ્રવેશ ફી ભરવાની રહશે જે મળશે નહિ.
                </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  4. તાલીમ વર્ગો નિઃશુલ્ક રહશે.
                </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  5. મોબાઈલ સ્વિચ ઑફ રાખવાનો રહશે. અન્યથા નિયત કરેલો દંડ ભરવાનો
                  રહશે.
                </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  6. વર્ગમાં ગેરહાજર રહેનાર ને નિયત કરેલ દંડ ભરવો પડશે.
                </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  7. આઈકાર્ડ ફરજિયાત પહેરવાનું રહશે
                </p>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  8. વર્ગ શરુ થયા બાદ પણ રજુ થયેલા શિસ્તનાં નિયમોનું ફરજિયાત
                  પાલન કરવાનું રહેશે.
                </p>
              </div>
              {/* Checkbox*/}
              <Form.Group className="mb-3">
                <Form.Check.Input
                  type="checkbox"
                  isInvalid={!data.terms_and_condition}
                  checked={data.terms_and_condition}
                  onChange={handleChangeTC}
                ></Form.Check.Input>
                <Form.Label style={{ paddingLeft: "1vw" }}>
                  Agree to terms and conditions
                </Form.Label>
                <Form.Control.Feedback type="invalid">
                  You must agree before submitting.
                </Form.Control.Feedback>
              </Form.Group>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5vh",
                    lineHeight: "3.5vh",
                  }}
                >
                  હું પરિવર્તન એજ્યુકેશન ચેરીટેબલે ટ્રસ્ટના તમામ નિયમોનું પાલન
                  કરવા બંધાયેલો છું અન્યથા એડમિશન રદ્દ થશે. જેની જવાબદારી મારી
                  રહશે.
                </p>
              </div>
              {/* </Row> */}
              <div className="form-group">
                <button className="lab-btn" type="submit">
                  <span>SUBMIT</span>
                </button>
              </div>
            </Form>
            {/* </form> */}
          </div>
        </div>
      </div>
      {/* end */}

      <Footer />
    </Fragment>
  );
};

export default AddmissionForm;

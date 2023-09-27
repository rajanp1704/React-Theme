import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js/dist/html2pdf.min";

const Receipt = ({ data, isDisabled }) => {
  const receiptJSX = () => {
    console.log(data);

    return (
      <div
        style={{
          width: "198mm",
          height: "257mm",
          border: "double",
          backgroundColor: "lightgray",
          margin: "5px",
        }}
      >
        {/* Academy Heading START */}
        <div
          style={{
            border: "double",
            display: "flex",
            margin: "5px",
            padding: "5px",
          }}
        >
          <div style={{ width: "100px" }}>
            <img src="assets/images/logo/01.png" alt="Invoice logo" />
          </div>
          <div
            style={{
              margin: "5px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "40px" }}>
              FCB
            </p>
            <p
              style={{
                margin: "0px",
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              Barcelona
            </p>
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              Spain
            </p>
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              +12 3456789
            </p>
          </div>
        </div>
        {/*  Academy Heading END */}

        {/* Reciept info START */}
        <div
          style={{
            border: "double",
            display: "flex",
            margin: "5px",
            padding: "5px",
          }}
        >
          <div
            style={{
              width: "50%",
              margin: "5px",
              marginTop: "10px",
              textAlign: "left",
            }}
          >
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              RECEIPT NO. : 122333
            </p>
            <p
              style={{
                margin: "0px",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              COURSE : Talati
            </p>

            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              COURSE DURATION : 6 month
            </p>
          </div>
          <div
            style={{
              width: "50%",
              margin: "5px",
              marginTop: "10px",
              textAlign: "right",
            }}
          >
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              RECEIPT DATE : 15 Apr 2023
            </p>
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              COURSE FEES : ₹ 5,000.00
            </p>
          </div>
        </div>
        {/* Reciept info END */}

        {/* Student Profile START */}
        <div
          style={{
            border: "double",
            display: "flex",
            margin: "5px",
            padding: "5px",
          }}
        >
          <div
            style={{
              width: "90%",
              margin: "5px",
              marginTop: "10px",
              textAlign: "left",
            }}
          >
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              NAME : {data.studentName}
            </p>
            <p
              style={{
                margin: "0px",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Roll No. : 123456789
            </p>
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              EMAIL : john.smith@gmail.com
            </p>
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px" }}>
              MOBILE : 1234567890
            </p>
          </div>

          <div
            style={{
              border: "solid",
            }}
          >
            <img
              src="assets/images/receipt/student-photo.png"
              alt="student's"
              width={"100px"}
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </div>
        {/* Student Profile END */}

        {/* Payment Details START */}
        <div
          style={{
            border: "double",
            display: "flex",
            margin: "5px",
            padding: "5px",
          }}
        >
          <div style={{ width: "100%", margin: "0px", marginBottom: "-15px" }}>
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th className="per70 text-center">Description</th>
                  <th className="per5 text-center">Qty</th>
                  <th className="per25 text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    1024MB Cloud 2.0 Server - elisium.dynamic.com (12/04/2014 -
                    01/03/2015)
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">$25.00 USD</td>
                </tr>
                <tr>
                  <td>Logo design</td>
                  <td className="text-center">1</td>
                  <td className="text-center">$200.00 USD</td>
                </tr>
                <tr>
                  <td>
                    Backup - 1024MB Cloud 2.0 Server - elisium.dynamic.com
                  </td>
                  <td className="text-center">12</td>
                  <td className="text-center">$12.00 USD</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2} className="text-right">
                    Sub Total:
                  </th>
                  <th className="text-center">$237.00 USD</th>
                </tr>
                <tr>
                  <th colSpan={2} className="text-right">
                    20% VAT:
                  </th>
                  <th className="text-center">$47.40 USD</th>
                </tr>
                <tr>
                  <th colSpan={2} className="text-right">
                    Credit:
                  </th>
                  <th className="text-center">$00.00 USD</th>
                </tr>
                <tr>
                  <th colSpan={2} className="text-right">
                    Total:
                  </th>
                  <th className="text-center">$284.4.40 USD</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {/* Payment Details END*/}

        {/* Message START */}
        <div
          style={{
            border: "double",
            margin: "5px",
            padding: "5px",
            display: "flex",
            marginTop: "167px",
          }}
        >
          <div
            style={{
              margin: "5px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <p style={{ margin: "0px", fontWeight: "bold", fontSize: "20px" }}>
              This is a Computer generated receipt and does not require any
              Signature.
            </p>
          </div>
        </div>
        {/* Message END */}
      </div>
    );
  };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(receiptJSX());
    // const printElement = pdfJSX();
    const opt = {
      margin: [5, 5, 5, 5],
      filename: "payment-receipt.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(printElement).set(opt).save();
    // console.log(printElement);
  };

  return (
    <div className="form-group text-center" style={{ margin: "5vh" }}>
      <button
        className="d-block lab-btn"
        onClick={printHandler}
        style={{ color: "white" }}
        disabled={isDisabled}
      >
        Print
      </button>
    </div>
  );
};

export default Receipt;

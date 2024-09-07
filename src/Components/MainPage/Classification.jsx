import React, { useState, useEffect } from "react";
import "./Dataflow.css";
import { MdCloudUpload } from "react-icons/md";
import samplePDF from "../../../src/duha_cv.pdf";
import axios from "axios";
import Swal from "sweetalert2";
const Classification = () => {
  const [phone, setPhone] = useState("");
  const [showPDF, setShowPDF] = useState(false);
  const [file, setFile] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [physician, setPhysician] = useState("");
  const [urgently, seturgently] = useState("");
  const [total, setTotal] = useState(0);

  const phoneRegex = /^00-966-\d{3}-\d{3}-\d{4}$/;

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePhysicianChange = (e) => {
    setPhysician(e.target.value);
  };
  const handleUrgentlyChange = (e) => {
    seturgently(e.target.value);
  };

  const calculateTotal = () => {
    let price = 0;

    if (physician === "yes") {
      price += 100;
    } else if (physician === "no") {
      price += 50;
    }

    if (urgently === "yes") {
      price += 50;
    }

    setTotal(price);
  };

  useEffect(() => {
    calculateTotal();
  }, [physician, urgently]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    axios.post("http://localhost:5004/application", {
      firstName,
      lastName,
      phone,
      file,
      physician,
      urgently,
      total,
    });
    Swal.fire({
      title: "Successfully Submitted",
      text: "Thank You ",
      icon: "success",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        icon: "custom-icon",
        confirmButton: "custom-button btn",
      },
    });
    // refreshReviews();

    // Additional form submission logic here
  };

  const handleTogglePDF = () => {
    window.open(samplePDF, "_blank");
  };

  return (
    <div className="BIG-CONTAINER">
      <h1>Data Flow & Classification</h1>
      <div className="Big-box2">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              placeholder="FIRST NAME"
              name="firstname"
              required
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
          </div>

          <div className="field">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              placeholder="LAST NAME"
              name="lastname"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              placeholder="00-966-000-000-0000"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
              pattern="^00-966-\d{3}-\d{3}-\d{4}$"
              title="Please enter a phone number in the format 00-966-000-000-0000"
            />
          </div>

          <div className="file">
            <div className="upload">
              <MdCloudUpload />
              <label className="custom-file-upload">
                Choose File
                <input type="file" name="file1" onChange={handleFile} />
              </label>
            </div>
            <button
              type="button"
              className="custom-button btn"
              onClick={handleTogglePDF}
            >
              {showPDF ? "Hide Example" : "Show Example"}
            </button>
          </div>

          <div className="radio_buttons">
            <label htmlFor="physician">PHYSICIAN</label>
            <input
              type="radio"
              value="yes"
              name="physician"
              id="physician-yes"
              onChange={handlePhysicianChange}
            />
            <label htmlFor="yes">YES</label>
            <input
              type="radio"
              value="no"
              name="physician"
              id="physician-no"
              onChange={handlePhysicianChange}
            />
            <label htmlFor="no">NO</label>
          </div>
          <div className="radio_buttons">
            <label htmlFor="urgently">URGENTLY</label>
            <input
              type="radio"
              value="yes"
              name="urgently"
              id="urgently-yes"
              onChange={handleUrgentlyChange}
            />
            <label htmlFor="yes">YES</label>
            <input
              type="radio"
              value="no"
              name="urgently"
              id="urgently-no"
              onChange={handleUrgentlyChange}
            />
            <label htmlFor="no">NO</label>
          </div>
          <div className="price">
            <label htmlFor="total">TOTAL</label>
            <input type="text" name="total" disabled value={total} />
          </div>
          <button className="custom-button btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contain">
        <h3>FILE MUST CONTAIN</h3>
        <div className="bigOne">
          <div className="box3 green">
            <h4>Passport</h4>
          </div>
          <div className="box3">
            <h4>Degree</h4>
          </div>
          <div className="box3">
            <h4>Professional practice certificate</h4>
          </div>
          <div className="box3 green">
            <h4>Mark sheet</h4>
          </div>
          <div className="box3 green">
            <h4>Data Flow Report</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classification;

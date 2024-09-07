import React, { useState, useEffect } from "react";
import "./Dataflow.css";
import { MdCloudUpload } from "react-icons/md";
import samplePDF from "../../../src/duha_cv.pdf";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';

const Dataflow = () => {
  const [phone, setPhone] = useState("");
  const [showPDF, setShowPDF] = useState(false);
  const [file, setFile] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [physician, setPhysician] = useState("");
  const [urgently, seturgently] = useState("");
  const [total, setTotal] = useState(0);
  const { t } = useTranslation();
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
   
  };

  const handleTogglePDF = () => {
    window.open(samplePDF, "_blank");
  };

  return (
    <div className="BIG-CONTAINER">
      <h1>{t('title')}</h1>
      <div className="Big-box2">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="firstname">{t('firstName')}</label>
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
            <label htmlFor="lastname">{t('lastName')}</label>
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
            <label htmlFor="phone">{t('phoneNumber')}</label>
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
              {t('chooseFile')}
                <input type="file" name="file1" onChange={handleFile} />
              </label>
            </div>
            <button
              type="button"
              className="custom-button btn"
              onClick={handleTogglePDF}
            >
             {t('showExample')}
            </button>
          </div>

          <div className="radio_buttons">
            <label htmlFor="physician">{t('physician')}</label>
            <input
              type="radio"
              value="yes"
              name="physician"
              id="physician-yes"
              onChange={handlePhysicianChange}
            />
            <label htmlFor="yes">{t('yes')}</label>
            <input
              type="radio"
              value="no"
              name="physician"
              id="physician-no"
              onChange={handlePhysicianChange}
            />
            <label htmlFor="no">{t('no')}</label>
          </div>
          <div className="radio_buttons">
            <label htmlFor="urgently">{t('urgently')}</label>
            <input
              type="radio"
              value="yes"
              name="urgently"
              id="urgently-yes"
              onChange={handleUrgentlyChange}
            />
            <label htmlFor="yes">{t('yes')}</label>
            <input
              type="radio"
              value="no"
              name="urgently"
              id="urgently-no"
              onChange={handleUrgentlyChange}
            />
            <label htmlFor="no">{t('no')}</label>
          </div>
          <div className="price">
            <label htmlFor="total">{t('total')}</label>
            <input type="text" name="total" disabled value={total} />
          </div>
          <button className="custom-button btn" type="submit">
          {t('submit')}
          </button>
        </form>
      </div>
      <div className="contain">
        <h3>{t('fileMustContain')}</h3>
        <div className="bigOne">
          <div className="box3 green">
            <h4>{t('passport')}</h4>
          </div>
          <div className="box3">
            <h4>{t('degree')}</h4>
          </div>
          <div className="box3">
            <h4>{t('professionalPractice')}</h4>
          </div>
          <div className="box3 green">
            <h4>{t('markSheet')}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataflow;

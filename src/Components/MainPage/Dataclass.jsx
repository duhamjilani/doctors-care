import React, { useState, useEffect } from "react";
import "./Dataflow.css";
import { MdCloudUpload } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';  
import { useNavigate } from 'react-router-dom';

const Dataclass = () => {
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");
  const [EMAIL, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
 
  const [physician, setPhysician] = useState("");
  const [urgently, seturgently] = useState("");
  const flag=true;
  const [total, setTotal] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePhoneChange = (value) => {
    setPhone(value);  
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
      price = 897;
    } else if (physician === "no") {
      price =729;
    }

    
    if (urgently === "yes" && physician==="yes") {
      price =1037;
    }
    if (urgently === "yes" && physician==="no") {
      price =869;
    }

    setTotal(price);
  };

  useEffect(() => {
    calculateTotal();
  }, [physician, urgently]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      fullName,
      EMAIL,
      phone,
      file,
      physician,
      urgently,
      total,
      flag, 
    };
    
   
    
  
    navigate('/apply/dataflow/paypal', { state: { formData } });
  };

 

  return (
    <div className="BIG-CONTAINER">
      <h1>{t('title2')}</h1>
      <div className="Big-box2">
        <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data" >
        <div className="field">
            <label htmlFor="FULL NAME">{t('FULL NAME')}</label>
            <input
              type="text"
              placeholder="FULL NAME"
              name="FULL NAME"
              required
              onChange={(e) => {
                setfullName(e.target.value);
              }}
            />
          </div>

          <div className="field">
            <label htmlFor="EMAIL">{t('Email')}</label>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="phone">{t('phoneNumber')}</label>
            <PhoneInput
              country={'us'}  // Default country
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true
              }}
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
          <p className="note"> {t('note')}</p>

          <div className="price">
            <label htmlFor="total">{t('total')}</label>
            <input type="text" name="total" disabled value={`${total}$`} />
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

export default Dataclass;



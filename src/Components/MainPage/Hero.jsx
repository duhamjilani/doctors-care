import React from "react";
import "./Hero.css";
import pic from "../../Pictures/Hero.jpg";
import "./WhyUs";
import "./Apply";
import WhyUs from "./WhyUs";
import Apply from "./Apply";
import Reviews from "./Reviews";
import WriteFeedback from "./WriteFeedback";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: `url(${pic})`,
          minHeight: "80vh",
          backgroundSize: "cover",
        }}
      >
        <div className="layer">
          <h1> {t("About Us")}</h1>
          <p>{t("about us para")}</p>
        </div>
      </div>
      <WhyUs />
      <Apply />
      <Reviews />
      <WriteFeedback />
    </div>
  );
};

export default Hero;

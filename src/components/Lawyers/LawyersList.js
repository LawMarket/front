import React from "react";
import Lawyer from "./Lawyer";
import "./Lawyers.css";

const lawyers = [
  {
    _id: "1",
    lawyerName: "קובי",
    lawyerKnow: "דיני עבודה",
    lawyerPrice: "100",
    layerPic: "",
    skils: ["הבראה", "פנסייה", "נסיעות", "פיצויים"],
  },
  {
    _id: "2",
    lawyerName: "יאיר",
    lawyerKnow: "דיני נזיקין",
    lawyerPrice: "100",
    layerPic: "",
    skils: ["כשכג", "כגדד", "כגדכגד", "גדכדכג"],
  },
  {
    _id: "3",
    lawyerName: "שלומי",
    lawyerKnow: "דיני משפחה",
    lawyerPrice: "100",
    layerPic: "",
    skils: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
  },
  {
    _id: "4",
    lawyerName: "דניאל",
    lawyerKnow: "דיני נזיקין",
    lawyerPrice: "100",
    layerPic: "",
    skils: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
  },
  {
    _id: "5",
    lawyerName: "יעקב",
    lawyerKnow: "דיני תעבורה",
    lawyerPrice: "100",
    layerPic: "",
    skils: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
  },
  {
    _id: "6",
    lawyerName: "אבי",
    lawyerKnow: "דיני משפחה",
    lawyerPrice: "100",
    layerPic: "",
    skils: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
  },
  {
    _id: "7",
    lawyerName: "אלעד",
    lawyerKnow: "דיני חרטה",
    lawyerPrice: "100",
    layerPic: "",
    skils: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
  },
];

const LawyersList = () => {
  return (
    <div className="container">
      <h1 className="mb-3 text-center">עורכי הדין שלנו</h1>
      <div className="lw-wrapper row">
      {lawyers.length > 0 ? (
                     (lawyers || []).map(lawyer => (
                    <Lawyer key={lawyer._id} lawyer={lawyer} />
                ))
                 ) : <h4> לא נמצאו עורכי דין</h4>}
      </div>
    </div>
  );
};

export default LawyersList;

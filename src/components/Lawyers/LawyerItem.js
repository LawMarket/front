import React, { useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import image from "./userpic.jpeg";
import Rating from "../general/Rating";
import LawyerSkils from "./LawyerSkils";
import pic from "../Cards/product.jpg";
import { connect } from 'react-redux';


const lawyers = [
  {
    _id: "1",
    lawyerName: "קובי",
    lawyerKnow: "דיני עבודה",
    lawyerPrice: "100",
    location: "חיפה",
    expirence: "2",
    answerTime: "4 שעות",
    workReady: "3 ימים",
    layerPic: "../Lawyers/userpic.jpeg",
    skills: ["הבראה", "פנסייה", "נסיעות", "פיצויים"],
    bio: "sadasdasdasdasdsadadsdadasdsdasdasdsad adsaddsdasda sd",
  },
  {
    _id: "2",
    lawyerName: "יאיר",
    lawyerKnow: "דיני נזיקין",
    lawyerPrice: "100",
    location: "לוד",
    expirence: "4",
    answerTime: "2 שעות",
    workReady: "1 ימים",
    layerPic: "../Lawyers/userpic.jpeg",
    skills: ["כשכג", "כגדד", "כגדכגד", "גדכדכג"],
    bio: "sadasdasdasdasdsadadsdadasdsdasdasdsad adsaddsdasda sd",
  },
  {
    _id: "3",
    lawyerName: "שלומי",
    lawyerKnow: "דיני משפחה",
    lawyerPrice: "100",
    location: "רחובות",
    expirence: "7",
    answerTime: "2 דקות",
    workReady: "5 ימים",
    layerPic: "../Lawyers/userpic.jpeg",
    skills: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
    bio: "sadasdasdasdasdsadadsdadasdsdasdasdsad adsaddsdasda sd",
  },
  {
    _id: "4",
    lawyerName: "דניאל",
    lawyerKnow: "דיני נזיקין",
    lawyerPrice: "100",
    location: "יבנה",
    expirence: "1",
    answerTime: "3 שעות",
    workReady: "3 ימים",
    layerPic: "../Lawyers/userpic.jpeg",
    skills: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
    bio: "sadasdasdasdasdsadadsdadasdsdasdasdsad adsaddsdasda sd",
  },
  {
    _id: "5",
    lawyerName: "יעקב",
    lawyerKnow: "דיני תעבורה",
    lawyerPrice: "100",
    location: "נס ציונה",
    expirence: "8",
    answerTime: "3 שעות",
    workReady: "3 ימים",
    layerPic: "../Lawyers/userpic.jpeg",
    skills: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
    bio: "sadasdasdasdasdsadadsdadasdsdasdasdsad adsaddsdasda sd",
  },
  {
    _id: "6",
    lawyerName: "אבי",
    lawyerKnow: "דיני משפחה",
    lawyerPrice: "100",
    location: "חיפה",
    expirence: "2",
    answerTime: "4 שעות",
    workReady: "3 ימים",
    layerPic: "../Lawyers/userpic.jpeg",
    skills: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
    bio: "sadasdasdasdasdsadadsdadasdsdasdasdsad adsaddsdasda sd",
  },
  {
    _id: "7",
    lawyerName: "אלעד",
    lawyerKnow: "דיני חרטה",
    lawyerPrice: "100",
    location: "חיפה",
    expirence: "2",
    answerTime: "4 שעות",
    workReady: "3 ימים",
    layerPic: "../Lawyers/userpic.jpeg",
    skills: ["נהבנב", "נבהננ", "כגדככ", "כגכגכ"],
    bio: "sadasdasdasdasdsadadsdadasdsdasdasdsad adsaddsdasda sd",
  },
];

const LawyerItem = ({ match, isAuthenticated }) => {
    /* const testee =()=>{
        if(!isAuthenticated){
        return <Redirect to='/login' />
        }
    }; */
  let user = lawyers.find((lawyer) => {
    return lawyer._id === match.params.id;
  });

 /*  const {
    lawyerName,
    lawyerKnow,
    lawyerPrice,
    layerPic,
    skills,
    location,
    expirence,
    answerTime,
    workReady,
    bio,
  } = user;
 */
  return (
    <div className="container mb-3 mt-3">
      <div className="row">
        <div className="col-md-4">
          <div className="card profile-card-2">
            <div className="card-img-block">
              <img className="img-fluid" src={pic} alt="Card image cap" />
            </div>

            <div className="card-body">
              <img src={image} alt="profile-image" className="profile" />
              <div className="lawyer-details-card">
                <ul className="lawyer-details_ul">
                  <li className="lawyer-name">
                    <a href="#" style={{ color: "white" }}>
                      {user.lawyerName}
                    </a>
                  </li>
                  <li className="lawyer-know"> עו״ד ל {user.lawyerKnow} </li>
                  <Rating />
                </ul>
              </div>
            </div>

            <p
              style={{
                textAlign: "right",
                fontSize: "x-small",
                padding: "8px 25px 0px 0px",
              }}
            >
              {user.bio}
            </p>
            <hr />
            <ul className="">
              {user.skills.slice(0, 4).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
              {/*    <li>דמי הבראה</li>
                        <li>פנסיה</li>
                        <li>נסיעות</li>
                        <li>דמי הבראה</li>
                        <li>פנסיה</li>
                        <li>נסיעות</li> */}
            </ul>
            <hr />
            <div>
              <div
                className="d-flex justify-content-between"
                style={{ fontSize: "small" }}
              >
                <div className=" ">
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  מאיפה
                </div>
                <div className=" " style={{ marginLeft: ".8rem" }}>
                  {user.location}
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ fontSize: "small" }}
              >
                <div className="">
                  <i
                    class="fas fa-clock"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  ניסיון בתחום
                </div>
                <div className="" style={{ marginLeft: ".8rem" }}>
                  {user.expirence} שנים
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ fontSize: "small" }}
              >
                <div className=" ">
                  <i
                    className="fas fa-comment-dots"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  זמן תגובה ממוצע
                </div>
                <div className=" " style={{ marginLeft: ".8rem" }}>
                  {user.answerTime}
                </div>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ fontSize: "small" }}
              >
                <div className=" ">
                  <i
                    className="fas fa-calendar-check"
                    style={{ border: "0px", color: "#08b9e3" }}
                  ></i>
                  עבודה מכונה תוך זמן
                </div>
                <div className=" " style={{ marginLeft: ".8rem" }}>
                  {user.workReady}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between p-3">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  borderColor: "rgb(8, 185, 227)",
                  backgroundColor: "rgb(8, 185, 227)",
                }}
              >
                צור קשר
              </button>
              <button
                type="button"
                className="btn btn-outline-primary offer-btn"
                style={{
                  color: "rgb(8, 185, 227)",
                  borderColor: "rgb(8, 185, 227)",
                }}
              >
                לקבלת הצעה
              </button>
            </div>
          </div>
        </div>
        <LawyerSkils />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps)(LawyerItem);

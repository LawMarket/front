import React from "react";
import product from "./product.jpg";
import "./FlipCardCss.scss";

const FlipCard = () => {
    return (
        <div className="container">
        <h3 className="text-center mb-5 mt-5">חלוקת נושאים ראשונה</h3>
        <div className="row justify-content-center">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                {" "}
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                    paddingTop: "30px",
                    paddingRight: "10px",
                  }}
                >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                    paddingTop: "30px",
                    paddingRight: "10px",
                  }}
                >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                    paddingTop: "30px",
                    paddingRight: "10px",
                  }}
                >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row justify-content-center">

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4  style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row justify-content-center">

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "20px",
                    }}
                    >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={product}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        );
}


export default FlipCard;



const priceSpanBack = {
    color: '#fff',
  position: "absolute",
  background: "black",
  top: "10px",
  left: "-40px",
  transform: "rotate(-30deg)",
  width: "50%",
  textAlign: "center",
};

const frontDiv = {
  display: "flex",
};

const spanPoints = {
  color: "black",
};

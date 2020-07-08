import React from 'react';
import './Lawyers.css';
import image from "./userpic.jpeg";


const lawyers = [
    {
        lawyerName:'יאיר',
        lawyerKnow:'דיני עבודה',
        lawyerPrice:'100',
        layerPic:'',
        skils:['הבראה','פנסייה', 'נסיעות', 'פיצויים']
    },
    {
        lawyerName:'יאיר',
        lawyerKnow:'דיני עבודה',
        lawyerPrice:'100',
        layerPic:'',
        skils:['הבראה','פנסייה', 'נסיעות', 'פיצויים']
    },
    {
        lawyerName:'יאיר',
        lawyerKnow:'דיני עבודה',
        lawyerPrice:'100',
        layerPic:'',
        skils:['הבראה','פנסייה', 'נסיעות', 'פיצויים']
    },
];

const LawyersCards = () => {
    return (
        <div className="container-fluid layers-card-container" >
            <h3 className="text-center lawyers-title">עורכי הדין שלנו</h3>
            <div className="cards-container row justify-content-center">
            <div className="col-3 lawyer-item">
                <div className="lawyer-card-header row">
                    <div className="image-container w-50">
                        <img src={image} className="rounded-circle" width='70px' height='70px'/>
                    </div>
                    <div className="layer-details">
                    <ul className="lawyer-details_ul">
                    <li className="lawyer-name" ><a href="#">יוסי עזריה</a></li>
                        <li className="lawyer-know"> עו״ד לדיני עבודה </li>
                        <li className="lawyer-price">עלות שירות: <a href="#">100$</a> </li>
                    </ul>
                    </div>
                </div>
                <div className="lawyer-skils">
                    <ul className="lawyer-skils_ul">
                        <li>דמי הבראה</li>
                        <li>פנסיה</li>
                        <li>נסיעות</li>
                    </ul>
                </div>
                <a href="#"> עוד</a>
            </div>
            <div className="col-3 lawyer-item">
            <div className="lawyer-card-header row">
                    <div className="image-container w-50">
                    <img src={image} className="rounded-circle" width='70px' height='70px'/>
                    </div>
                    <div className="layer-details">
                    <ul className="lawyer-details_ul">
                    <li className="lawyer-name" ><a href="#">יוסי עזריה</a></li>
                        <li className="lawyer-know"> עו״ד לדיני עבודה </li>
                        <li className="lawyer-price">עלות שירות: <a href="#">100$</a> </li>
                    </ul>
                    </div>
                </div>
                <div className="lawyer-skils">
                    <ul className="lawyer-skils_ul">
                        <li>דמי הבראה</li>
                        <li>פנסיה</li>
                        <li>נסיעות</li>
                    </ul>
                </div>
                <a href="#"> עוד</a>
            </div>
            <div className="col-3 lawyer-item">
                   <div className="lawyer-card-header row">
                    <div className="image-container">
                    <img src={image} className="rounded-circle" width='70px' height='70px'/>
                    </div>
                    <div className="layer-details">
                    <ul className="lawyer-details_ul">
                        <li className="lawyer-name" ><a href="#">יוסי עזריה</a></li>
                        <li className="lawyer-know"> עו״ד לדיני עבודה </li>
                        <li className="lawyer-price">עלות שירות: <a href="#">100$</a> </li>
                    </ul>
                       
                    </div>
                </div>
                <div className="lawyer-skils">
                    <ul className="lawyer-skils_ul">
                        <li>דמי הבראה</li>
                        <li>פנסיה</li>
                        <li>נסיעות</li>
                    </ul>
                </div>
                <a href="#"> עוד</a>
            </div>
            </div>
        </div>
    )
}

export default LawyersCards;
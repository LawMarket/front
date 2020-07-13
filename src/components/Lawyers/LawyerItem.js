import React from 'react';
import image from './userpic.jpeg';
import Rating from '../general/Rating';
import LawyerSkils from './LawyerSkils';
import pic from '../Cards/product.jpg';


const LawyerItem = () => {
    return (
        <div className="container">
        <div className="row" >
            <div className="col-md-4">
    		    <div className="card profile-card-2">
                    <div className="card-img-block">
                        <img className="img-fluid" src={pic} alt="Card image cap" />
                    </div>
                    
                    <div className="card-body">
                        <img src={image}alt="profile-image" className="profile"/>
                        <div className="lawyer-details-card">
                    <ul className="lawyer-details_ul">
                        <li className="lawyer-name" ><a href="#" style={{color: 'white'}}>יוסי עזריה</a></li>
                        <li className="lawyer-know"> עו״ד לדיני עבודה </li>
                        <Rating />
                    </ul>
                    </div>
                    </div>

                <p style={{textAlign:'right',fontSize:'x-small',padding: '8px 25px 0px 0px'}}>טקסא על העורך דין</p>
                <hr/>
                <ul className="">
                        <li>דמי הבראה</li>
                        <li>פנסיה</li>
                        <li>נסיעות</li>
                        <li>דמי הבראה</li>
                        <li>פנסיה</li>
                        <li>נסיעות</li>
                </ul>
                <hr/>
                    <div>
                        <div className="d-flex justify-content-between" style={{fontSize:'small'}}>
                        <div className=" "><i className="fas fa-map-marker-alt" style={{border:'0px', color:'#08b9e3'}}></i>מאיפה</div>
                        <div className=" " style={{marginLeft: '.8rem'}}>ירושלים</div>
                        </div>
                        <div className="d-flex justify-content-between" style={{fontSize:'small'}}>
                        <div className=""><i class="fas fa-clock" style={{border:'0px', color:'#08b9e3'}}></i>ניסיון בתחום</div>
                        <div className="" style={{marginLeft: '.8rem'}}>8 שנים</div>
                        </div>
                        <div className="d-flex justify-content-between" style={{fontSize:'small'}}>
                        <div className=" "><i className="fas fa-comment-dots" style={{border:'0px', color:'#08b9e3'}}></i>זמן תגובה ממוצע</div>
                        <div className=" " style={{marginLeft: '.8rem'}}>3 שעות</div>
                        </div>
                        <div className="d-flex justify-content-between" style={{fontSize:'small'}}>
                        <div className=" "><i className="fas fa-calendar-check" style={{border:'0px', color:'#08b9e3'}}></i>עבודה מכונה תוך זמן</div>
                        <div className=" " style={{marginLeft: '.8rem'}}>10 ימי עסקים</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-5" >
                    <button type="button" className="btn btn-primary" style={{borderColor: 'rgb(8, 185, 227)',backgroundColor:'rgb(8, 185, 227)'}}>צור קשר</button>
                    <button type="button" className="btn btn-outline-primary offer-btn" style={{color: 'rgb(8, 185, 227)',borderColor:'rgb(8, 185, 227)'}}>לקבלת הצעה</button>
                    </div>
                </div>
    		</div>
            <LawyerSkils />
          </div>
        </div>
    )
}

export default LawyerItem;
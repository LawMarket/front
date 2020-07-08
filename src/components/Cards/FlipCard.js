import React, { Component } from 'react';
import product from './product.jpg';
import './FlipCardCss.css'

export default class FlipCard extends Component {
    render() {
        return (
            <div className='container'>
                <div class="flip-card">
                 <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <span style={priceSpanFront}>100$</span>
                    <img src={product} alt="Avatar" style={{width:'300px',height:'300px'}}/>
                    <div style={bottomTitleStyle}>
                    <h4 style={{color:'#fff'}}>הסכמים</h4>
                </div>
                    </div>
                    <div class="flip-card-back">
                    <span style={priceSpanBack}>100$</span>
                      <div className='d-flex justify-content-end'>
                         <h4 style={{paddingTop:'30px',paddingRight:'10px',color:'black'}}> הסכמים</h4>
                      </div>
                        <div style={{direction:'rtl',textAlign:'right'}}>
                          <ul>
                             <li style={{color:'Blue'}}><span style={spanPoints}>פיצוי פיטורין</span></li>
                             <li style={{color:'blue'}}><span style={spanPoints}>דמי הבראה,טקסט חופשי,טקסט חופשי</span></li>
                             <li style={{color:'blue'}}><span style={spanPoints}>הלנת שכר,טקסט חופשי</span></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </div>
                
            </div>
        )
    }
}

const bottomTitleStyle = {
    position:'absolute',
    bottom:'0px',
    width:'100%',
    height:'50px',
    opacity:'0.5',
    background:'gray',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

const priceSpanFront = {
    position:'absolute',
    background:'#fff',
    top:'10px',
    left:'-40px',
    transform: 'rotate(-30deg)',
    width:'50%',
    textAlign:'center'
}

const priceSpanBack = {
    position:'absolute',
    background:'black',
    top:'10px',
    left:'-40px',
    transform: 'rotate(-30deg)',
    width:'50%',
    textAlign:'center'
}

const frontDiv = {
    display:'flex',

}

const spanPoints = {
    color:'black'
}
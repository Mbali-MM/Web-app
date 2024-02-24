import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App() {
  return (
   <>
      <nav>
        <div class ="container1">
          <p class = "logo">Lyf-)  </p>
          <p> /isurance@tiropay.au</p>
        </div>
        <div class="container2">
          <button class="button1">Log in</button>
          <button class="button">Get started</button> 	
          </div>
      </nav>

      <div class="Section1">
        <h1> Life Planning, Making <br/>Easy to Turn Dreams a Reality</h1>
        <p> Get Exclusive Offer on purchase of any plans</p>
      </div>

      <div class="Section2">
       <input type="email" id="email" placeholder="Your Email" name="email"/>
       <button class="button">Log in</button>
      </div>

      <div class="Section3">
        <div class ="left">
        <h2>Featured Plans</h2> 
        </div>
        
        <div class ="right">
        <h3>Explore all</h3> 
        </div>
      </div>
    
        <div class="row">
            <div class="column1">
            <p class =" one">STRATEGY</p>
            <h3>Money Momentum</h3>
            <p class="two">Tract Premium helps you start saver<br/> investments insights covering</p>
            <hr/>
            <p class ="two">3 yrs CAGR</p>
            <h4>7.20%</h4>
            </div>


            <div class="column2">
            <p class =" one">PLANS</p>
            <h3>Long-Term</h3>
            <p class="two">Create a vision. To get started, imagine<br/>your dream life</p>
            <hr/>
            <p class ="two">25 yrs CAGR</p>
            <h4>14.20%</h4>
            </div>


            <div class="column3">
              <p class =" one">Focussed</p>
              <h3>Focussed</h3>
              <p class="two">Be focussed Life Planning.however, can<br/> serve as a roadmap or guide</p>
              <hr/>
              <p class ="two">1 yrs CAGR</p>
              <h4>11.20%</h4>
            </div>


            <div class="column4">
              <p class =" one">Fixed Income</p>
              <h3>Money Momentum</h3>
              <p class="two">Get muiltiple benefits and lumpsum<br/> option & Gauranteed Returns</p>
              <hr/>
              <p class ="two">3 yrs CAGR</p>
              <h4>7.20%</h4>
            </div>
        
        </div>
       <hr/>

        <div class="footer">
        <p>Terms Policy  . Customer Story</p>
        <button class="btn"> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
        
        </div>

    
  </>
  );
}


  

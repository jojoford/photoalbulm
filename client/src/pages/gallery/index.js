import React from 'react';
import "./gallery.css";
import kimsbaby from '../../assets/all/kimsbaby.jpg';
import KimsBlackandWhite from '../../assets/all/KimsBlackandWhite.jpg';
import Nashvilleweddingjames from '../../assets/all/Nashvilleweddingjames.jpg';
import kimslandscape from '../../assets/all/kimslandscape.jpg';
import katiezero from '../../assets/blackAndWhite/0-minmin.jpg';
import katiepzero from '../../assets/Portraits/katiepzero-minmin.jpg';
import katiepfour from '../../assets/Portraits/katiep4-minmin.jpg';
import katiepfive from '../../assets/Portraits/katiep5-minmin.jpg';
import NVskyline from '../../assets/all/NVskyline.jpg';
import tnlandscape from '../../assets/all/tnlanscapejames.jpg';

function Gallery(){
    return(
 <div className="row">
    <h2> Kim's Gallery</h2>
    <div class="coloumn">
    
    <img src={kimsbaby}></img>
    <img src={KimsBlackandWhite}></img>
    <img src={kimslandscape}></img> 
    
    </div>
     
       <div class="row">
    <h1>Shop James  </h1>
    <div class="coloumn">
    
    <img src={Nashvilleweddingjames}></img>
    <img src={NVskyline}></img>
    <img src={tnlandscape}></img>
    </div></div>

     <div class="row">
     <h1> Katie's Gallery </h1>
     <div class="coloumn">
    
     <img src={katiepzero}></img>
     <img src={katiepfour}></img>
     <img src={katiepfive}></img>
      <img src={katiezero}></img></div>
  </div>
  </div>
    
  
    
    );
}

export default  Gallery;
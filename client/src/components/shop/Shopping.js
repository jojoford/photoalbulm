  
//import React, { Component } from 'react';
import './index.css';
import Item1 from '../../assets/all/KimsBlackandWhite.jpg'
    import Item2 from '../../assets/all/kimslandscape.jpg'
    import Item3 from '../../assets/all/NVskyline.jpg'
    import Item4 from '../../assets/all/Nashvilleweddingjames.jpg'
    import Item5 from '../../assets/blackAndWhite/0-minmin.jpg'
    import Item6 from '../../assets/Portraits/katiep4-minmin.jpg'
    import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from './actions/action-types/cart-actions'
    import { addToCart } from './actions/cartActions'
     import React, { Component, useState, useEffect } from "react";
    import { Link } from "react-router-dom";
 function Shopping () {
      return (
        <main>
          <section>
            <div className="banner-innerpage">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6 align-self-center text-center">
                    <h1 className="title">Shop listing</h1>
                    <h6 className="subtitle op-8">
                      We are small team of creative people working together
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="spacer">
              <div className="container">
                <div className="row mt-5">
                  <div className="col-lg-9">
                    <div className="row shop-listing">
                      
                          <div className="card shop-hover border-0">
                            <img
                              src={ Item2}
                              alt="photo for sale"
                              className="img-fluid"
                            />
                            <div className="card-img-overlay align-items-center">
                              <button
                                onClick={(e) => addToCart()}
                                className="btn btn-md btn-info"
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                          <div className="card border-0">
                            <h6>
                              <a href="#" className="link">
                                {" "}
                              </a>
                            </h6>
                            <h6 className="card-title">by Kim</h6>
                            <h5 className="font-medium m-b-30">
                              $15 /{"On sale"}
                              <del className="text-muted line-through">$25</del>
                            </h5>
                          </div>
                        </div>
                      <img src={Item1}></img>
                    </div>
                  </div>
                </div>
              </div>
        
          </section>
        </main>
      );
    }


 export default Shopping
import React from 'react';
import { Link } from "react-router-dom";
// import SignupForm from './SignupForm';
// import LoginForm from './LoginForm';
// import Auth from '../../utils/auth';
import './nav.css';
//alyse added link 
function Nav() {
    

//   const  categories = [
//     { name: 'blackAndWhite', description: 'Photos in black and white' },
//     { name: 'portraits', description: 'Portraits of people in my life' },
//     { name: 'landscape', description: 'The beauty of nature' }
//   ];

  // const {
  //   // setCurrentCategory,
  //   // currentCategory,
  //   // contactSelected,
  //   // setContactSelected
  // } = props;

      return (
          <div>
        <nav className="nav">
        <h1 className="header">
          <Link to="/">Photo-Album📸</Link>
         </h1>
        
        <div className="nav-items">
        <Link className="nav-item" to="/about">About</Link>
                 
        
        <Link className="nav-item" to="/artists">Artists</Link>
                 
        
        <Link className="nav-item" to="/contact">Contact</Link>
                
          
        <Link className="nav-item"  to="/gallery">Shop Gallery</Link>
        <Link className="nav-item"  to="/shopping">Shop </Link>

        <ul className="right"><Link to="/cart"><i className="material-icons">shopping cart</i></Link></ul>
                    
                
                   
  
      

          </div>  
   </nav>
   </div>

      );
    };

                      

    export default Nav;

                
            
      
    //     <div className="topnav" id="Topnav">
    //       {/* <h1>
    //         <Link to="/" className="active">Photo-Album📸</Link>
    //         </h1> */}
        
    //   <nav>
    //       <div className="router-link">
    //       <Link className="text-decor" to="/about">About</Link>
    //                 </div>
    //       <div className="router-link">
    //         <Link className="text-decor" to="/artists">Artists</Link>
    //                 </div>
    //       <div className="router-link">
    //         <Link className="text-decor" to="/contact">Contact</Link>
    //                 </div>
    
    //         <div className="router-link">
            
    //       <Link to="/portraits">Portraits</Link>
    //                   </div>
    
    //         <div className="router-link">
    //      <Link to="/blackandwhites">Black and Whites</Link>
    //                   </div>
    
    //         <div className="router-link">
    //         <Link to="/landscapes">Landscapes</Link>
    //                   </div>   
    //             </nav>
                
    // </div>
    
      
                 
  
  
 

        


      
        

   


/*import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import Login from "../Login"
import Logout from "../Logout"
export default class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='navbtn-grid' >
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation" ><i className="fas fa-bars fa-2x nav-btn"></i></button>
                </div>
                <div className='nav-grid collapse' id='nav-content'>
                    <div>
                        <div className="router-link">
                            <Link className="text-decor" to="/">home</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/photos">photos</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/artists">artists</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/shopcart">shop</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/about">about</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/contact">contact</Link>
                        </div>
                        <div className="router-link">
                            <Login></Login>
                        </div>
                        <div className="router-link">
                            <Logout></Logout>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
*/
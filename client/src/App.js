import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient  from 'apollo-boost';



import Home from "./pages/Home";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login';
// import Signup from './pages/Signup';
import About from './components/About';
// import Carousel from './components/Carousel';
import Contact from './pages/Contact/contact';
import Artists from './pages/artists';
import Gallery from './pages/gallery';
import Shopping from './components/shop/Shopping';

import{ send } from 'emailjs-com';
send("user_sEQrpGOlpMgWkdKpkI89Y");


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})
//alyse added artists and contact


function App() {
  // const [contactSelected, setContactSelected] = useState(false);

  // const [categories] = useState([
  //   {
  //     name: 'portraits'
  //   },
  //   {
  //     name: 'landscape'
  //   },
  //   {
  //     name: 'black and Whites'
  //   },
  // ])

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //path for pages, exact path for component



  return (
  <ApolloProvider client={client}>
<Router>
  <div>
    <Nav /> 
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/signup" component={Signup} /> */}
      <Route exact path="/about" component={About} />
      <Route path="/artists" component={Artists} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" component={Gallery}/>
      <Route path="/shopping" component={Shopping}/>

    </Switch>

  </div>
  <Footer></Footer>
 </Router>
 </ApolloProvider>
);
}
export default App; 
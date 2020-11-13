import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import './App.css'; 
import  fI from './img/film.jpg' ;
import  fS from './img/serie.jpg';
import  f1 from './img/1.jpg' ;
import  f2 from './img/2.jpg' ;
import  f3 from './img/3.jpg' ;
import  f4 from './img/4.jpg' ;
import  f5 from './img/5.jpg' ;
import  f6 from './img/6.jpg' ;
import  f7 from './img/7.jpg' ;


function Home(){
    return (
      <div className="App">
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </header>      
        <form className="form">
          <input type="text" name="search" placeholder="Search..."/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
  
          <div>
          <img src={fI} alt="film"className="imgI"></img>
          </div>
  
            <div>
              <h3 className="h2">Contenuti simili: </h3> <br></br>
            </div>
  
            <div id="carousel">
              <div className="slide">
                  <img src={f1} alt="1" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f2} alt="2" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f3} alt="3" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f4} alt="4" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f5} alt="5" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f6} alt="6" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f7} alt="7" className="imgS"></img>
              </div>
            </div>
  
            <div>
              <h3 className="h2">Ultime uscite: </h3> <br></br>
            </div>
  
            <div id="carousel">
              <div className="slide">
                  <img src={f1} alt="1" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f2} alt="2" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f3} alt="3" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f4} alt="4" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f5} alt="5" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f6} alt="6" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f7} alt="7" className="imgS"></img>
              </div>
            </div>
  
            <div>
              <h3 className="h2">Contenuti più popolari: </h3> <br></br>
            </div>
  
            <div id="carousel">
              <div className="slide">
                  <img src={f1} alt="1" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f2} alt="2" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f3} alt="3" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f4} alt="4" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f5} alt="5" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f6} alt="6" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f7} alt="7" className="imgS"></img>
              </div>
            </div>
      </div>
    );
  }
  


function Film() {
    return(
    <div className="App">
      <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </header>
      
        
      <form className="form">
        <input type="text" name="search" placeholder="Search..."/>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>

        <div>
        <img src={fI} alt="film"className="imgI"></img>
        </div>

          <div>
            <h3 className="h2">Film in evidenza: </h3> <br></br>
          </div>

          <div id="carousel">
            <div className="slide">
                <img src={f1} alt="1" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f2} alt="2" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f3} alt="3" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f4} alt="4" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f5} alt="5" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f6} alt="6" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f7} alt="7" className="imgS"></img>
            </div>
          </div>

          <div>
            <h3 className="h2">Ultime uscite: </h3> <br></br>
          </div>

          <div id="carousel">
            <div className="slide">
                <img src={f1} alt="1" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f2} alt="2" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f3} alt="3" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f4} alt="4" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f5} alt="5" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f6} alt="6" className="imgS"></img>
            </div>
            <div className="slide">
                <img src={f7} alt="7" className="imgS"></img>
            </div>
          </div>
         
              <div>
              <h3 className="h2">Comedy: </h3> <br></br>
              </div>

            <div id="carousel">
                <div className="slide">
                    <img src={f1} alt="1" className="imgS"></img>
                </div>
            </div>


            <div>
              <h3 className="h2">Drama: </h3> <br></br>
            </div>

            <div id="carousel">
                <div className="slide">
                    <img src={f1} alt="1" className="imgS"></img>
                </div>
            </div>

            <div>
              <h3 className="h2">Fantasy: </h3> <br></br>
            </div>

            <div id="carousel">
                <div className="slide">
                    <img src={f1} alt="1" className="imgS"></img>
                </div>
            </div>

            <div>
              <h3 className="h2">Science fiction: </h3> <br></br>
            </div>

            <div id="carousel">
                <div className="slide">
                    <img src={f1} alt="1" className="imgS"></img>
                </div>
            </div>

            <div>
              <h3 className="h2">Thriller: </h3> <br></br>
            </div>

            <div id="carousel">
                <div className="slide">
                    <img src={f1} alt="1" className="imgS"></img>
                </div>
            </div>
    </div>
    );
}

function SerieTv() {
    return(
        <div className="App">
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </header>
        
          
        <form className="form">
          <input type="text" name="search" placeholder="Search..."/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
  
          <div>
          <img src={fS} alt="film"className="imgI"></img>
          </div>
  
            <div>
              <h3 className="h2">Serie tv in evidenza: </h3> <br></br>
            </div>
  
            <div id="carousel">
              <div className="slide">
                  <img src={f1} alt="1" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f2} alt="2" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f3} alt="3" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f4} alt="4" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f5} alt="5" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f6} alt="6" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f7} alt="7" className="imgS"></img>
              </div>
            </div>
  
            <div>
              <h3 className="h2">Ultime uscite: </h3> <br></br>
            </div>
  
            <div id="carousel">
              <div className="slide">
                  <img src={f1} alt="1" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f2} alt="2" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f3} alt="3" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f4} alt="4" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f5} alt="5" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f6} alt="6" className="imgS"></img>
              </div>
              <div className="slide">
                  <img src={f7} alt="7" className="imgS"></img>
              </div>
            </div>
           
                <div>
                <h3 className="h2">Comedy: </h3> <br></br>
                </div>
  
              <div id="carousel">
                  <div className="slide">
                      <img src={f1} alt="1" className="imgS"></img>
                  </div>
              </div>
  
  
              <div>
                <h3 className="h2">Drama: </h3> <br></br>
              </div>
  
              <div id="carousel">
                  <div className="slide">
                      <img src={f1} alt="1" className="imgS"></img>
                  </div>
              </div>
  
              <div>
                <h3 className="h2">Fantasy: </h3> <br></br>
              </div>
  
              <div id="carousel">
                  <div className="slide">
                      <img src={f1} alt="1" className="imgS"></img>
                  </div>
              </div>
  
              <div>
                <h3 className="h2">Science fiction: </h3> <br></br>
              </div>
  
              <div id="carousel">
                  <div className="slide">
                      <img src={f1} alt="1" className="imgS"></img>
                  </div>
              </div>
  
              <div>
                <h3 className="h2">Thriller: </h3> <br></br>
              </div>
  
              <div id="carousel">
                  <div className="slide">
                      <img src={f1} alt="1" className="imgS"></img>
                  </div>
              </div>
          
      </div>
    );
}

function Preferiti() {
    return(
      <h1>Preferiti</h1>
    );
}

export default function App(){
    return(
    <Router>
          <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Film">Film</Link></li>
                <li><Link to="/SerieTv">Serie-tv</Link></li>
                <li><Link to="/Preferiti">Preferiti</Link></li>
            </ul>

            <hr />

                <Switch>

                <Route exact path="/">
                 <Home />
                </Route>

                <Route path="/Film">
                 <Film />
                </Route>

                <Route path="/SerieTv">
                 <SerieTv />
                </Route>

                <Route path="/Preferiti">
                 <Preferiti />
                </Route>

                </Switch>
            </div>
        </Router>
    );
}
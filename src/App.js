import './App.css';
import  film from './img/film.jpg' ;
import  f1 from './img/1.jpg' ;
import  f2 from './img/2.jpg' ;
import  f3 from './img/3.jpg' ;
import  f4 from './img/4.jpg' ;
import  f5 from './img/5.jpg' ;
import  f6 from './img/6.jpg' ;
import  f7 from './img/7.jpg' ;

function App() {
  return (
    <div className="App">
      <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>  
      </header>
      <body>
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li><a  href="#film"> Film </a></li>
        <li><a  href="#serieTv">Serie-tv</a></li>
        <li><a  href="#preferiti">Preferiti</a></li>
      </ul>
      <form className="form">
        <input type="text" name="search" placeholder="Search..."/>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>

        <div>
        <img src={film} alt="film"className="imgI"></img>
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
            <h3 className="h2">Serie Tv popolari: </h3> <br></br>
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
            <h3 className="h2">Film più popolari: </h3> <br></br>
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


        </body>
    </div>
  );
}

export default App;



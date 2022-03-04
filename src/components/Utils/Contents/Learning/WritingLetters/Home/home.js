import './home.scss';
import React, { useEffect, useState, useRef, createRef } from 'react';
import {
    Link
  } from "react-router-dom";
const Home = (props)=> {  
    return (
        <div id="home-content">
            <div>
                <Link to="/learning/writingletters/a">
                    <button className="learn-more">A</button>
                </Link>
                <Link to='/learning/writingletters/b'><button className="learn-more">B</button></Link>    
                <Link to='/learning/writingletters/c'><button className="learn-more">C</button></Link>    
                <Link to='/learning/writingletters/d'><button className="learn-more">D</button></Link>     
                <Link to='/learning/writingletters/e'><button className="learn-more">E</button></Link>     
                <Link to='/learning/writingletters/f'><button className="learn-more">F</button></Link> <br/><br/>    
                <Link to='/learning/writingletters/g'><button className="learn-more">G</button></Link>    
                <Link to='/learning/writingletters/h'><button className="learn-more">H</button></Link> 
                <Link to='/learning/writingletters/i'><button className="learn-more">I</button></Link> 
                <Link to='/learning/writingletters/j'><button className="learn-more">J</button></Link>
                <Link to='/learning/writingletters/k'><button className="learn-more">K</button></Link>
                <Link to='/learning/writingletters/l'><button className="learn-more">L</button></Link> <br/><br/>
                <Link to='/learning/writingletters/m'><button className="learn-more">M</button></Link>
                <Link to='/learning/writingletters/n'><button className="learn-more">N</button></Link> 
                <Link to='/learning/writingletters/o'><button className="learn-more">O</button></Link>
                <Link to='/learning/writingletters/p'><button className="learn-more">P</button></Link>
                <Link to='/learning/writingletters/q'><button className="learn-more">Q</button></Link> 
                <Link to='/learning/writingletters/r'><button className="learn-more">R</button></Link> <br/><br/>
                <Link to='/learning/writingletters/s'><button className="learn-more">S</button></Link>
                <Link to='/learning/writingletters/t'><button className="learn-more">T</button></Link>
                <Link to='/learning/writingletters/u'><button className="learn-more">U</button></Link>
                <Link to='/learning/writingletters/v'><button className="learn-more">V</button></Link>
                <Link to='/learning/writingletters/w'><button className="learn-more">W</button></Link>
                <Link to='/learning/writingletters/x'><button className="learn-more">X</button></Link> <br/><br/>
                <Link to='/learning/writingletters/y'><button className="learn-more">Y</button></Link> 
                <Link to='/learning/writingletters/z'><button className="learn-more">Z</button></Link> <br/><br/>
            </div>

        </div> 
    )
}

export default Home;
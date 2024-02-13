import React from 'react';
import './projects.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import WhiteButton from '../Button/WhiteButton';

const projects = () => {
    return (
        <section id="projects">
            <h1 className="projectsTitle">My projects</h1>
            <p className="projectsDescription">I have developed several projects during my career both in business and at university</p>
            <div className="projectsContainer">
                <img src={Portfolio1} alt="Project 1" className="projectsImage" />        
                <img src={Portfolio2} alt="Project 2" className="projectsImage" />        
                <img src={Portfolio3} alt="Project 3" className="projectsImage" />        
                <img src={Portfolio4} alt="Project 4" className="projectsImage" />        
                <img src={Portfolio5} alt="Project 5" className="projectsImage imageDisplayNone" />        
                <img src={Portfolio6} alt="Project 6" className="projectsImage imageDisplayNone" />        
            </div>
            <a target="_blank" class="blueButton" href="https://github.com/Salim-T">See more on github</a>
        </section>
    );
}

export default projects;
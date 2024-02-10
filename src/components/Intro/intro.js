import React from 'react'
import './intro.css'
// import illustration from '../../assets/dall_e_image/image3-removebg.png'
// import illustration2 from '../../assets/dall_e_image/image2-removebg.png'
import illustration3 from '../../assets/dall_e_image/image5-removebg.png'
import btnImg from '../../assets/hireme.png'
import WhiteButton from '../Button/WhiteButton';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introPresentation">
                <span className="introTitle">Hello,</span>
                <span className="introText">I am <span className="introName">Salim Tizi</span></span>
                <span>Full-Stack Developer</span>
                <p className='presentationParagraph' >I like <span>UX</span> design, <span>Database</span> administration and <span>mobile</span> application</p>
                <WhiteButton text="Hire me" />
            </div>
            {/* <img src={image2} alt="Profile" className="bg" /> */}
            <img src={illustration3}  alt="Illustration" className="illustration"/>
            {/* <img src={image5} alt="Profile" className="bg" /> */}
        </section>
    );
};

export default Intro;

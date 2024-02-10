import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebsiteDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import SkillContainer from '../skillContainer/skillContainer';

const Skills = () => {
    return (
        <section id="skills">
            <h1 className="skillsTitle">What I do</h1>
            <p className="skillsText">I am an enthusiastic web development student, with hands-on experience in front-end development using <span className='language' >React</span>, <span className='language' >React Native</span>, and <span className='language' >JavaScript</span>. Additionally, I have expertise in <span className='language' >C#</span> within the <span className='language'>.NET</span> framework and <span className='language'>MySQL</span> for database management. I also possess skills in UX design, utilizing <span className='tech'>Figma</span>, <span className='tech'>Photoshop</span>, and <span className='tech'>Illustrator</span>.</p>
            <div className='skillBar'>
                <SkillContainer
                    classSkillBar="skillBars"
                    imageTitle={WebsiteDesign}
                    imageDescription="UI Design"
                    classSkillBarImg="skillBarImg"
                    classSkillBarText="skillBarText"
                    title="Front end"
                    description="I value simple content structure, clean design, and thoughtful interactions."
                />
                <SkillContainer
                    classSkillBar="skillBars"
                    imageTitle={WebsiteDesign}
                    imageDescription="Website Design"
                    classSkillBarImg="skillBarImg"
                    classSkillBarText="skillBarText"
                    title="Back end"
                    description="I create and administrate Database."
                />
                <SkillContainer
                    classSkillBar="skillBars"
                    imageTitle={WebsiteDesign}
                    imageDescription="App Design"
                    classSkillBarImg="skillBarImg"
                    classSkillBarText="skillBarText"
                    title="Web Design"
                    description="I create design with Figma, Photoshop and Illustrator."
                />
            </div>
        </section>
    );
}

export default Skills;
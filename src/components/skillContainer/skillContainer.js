import React from 'react';
import './skillContainer.css';

const  SkillContainer = (props) => {
    return (
        <article className={props.classSkillBar} >
            <img src={props.imageTitle} alt={props.imageDescription} className={props.classSkillBarImg} />
            <div className={props.classSkillBarText} >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </article>
    );
}

export default SkillContainer;
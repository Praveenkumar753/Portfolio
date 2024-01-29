// Skills.js

import React from 'react';
import skill from './images/work33.jpg'
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
        
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">C programming</span>
            </div>
            <div className="skills__bar skills__html"></div>
            
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">Python</span>
            </div>
            <div className="skills__bar skills__css"></div>
            
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">Mechine Learning</span>
            </div>
            <div className="skills__bar skills__js"></div>
            
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">HTML</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            
          </div>
        </div>

        <div>
          <img src={skill} alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

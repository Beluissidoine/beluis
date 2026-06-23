import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skills = [
  { name: 'Flutter', cls: 'devicon-flutter-plain' },
  { name: 'Dart', cls: 'devicon-dart-plain' },
  { name: 'Firebase', cls: 'devicon-firebase-plain' },
  { name: 'Python', cls: 'devicon-python-plain' },
  { name: 'Django', cls: 'devicon-django-plain' },
  { name: 'React', cls: 'devicon-react-original' },
  { name: 'Node.js', cls: 'devicon-nodejs-plain' },
  { name: 'HTML5', cls: 'devicon-html5-plain' },
  { name: 'CSS3', cls: 'devicon-css3-plain' },
  { name: 'JavaScript', cls: 'devicon-javascript-plain' },
];

const SkillCard = ({ skill, index }) => {
  return (
    <div className={`skill-card glass-card-premium reveal reveal-delay-${(index % 4) + 1}`}>
      <div className="skill-icon-wrapper">
        {skill.icon ? (
          <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
        ) : (
          <i className={`${skill.cls} skill-icon-font`}></i>
        )}
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  useScrollReveal();

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header text-center reveal">
          <h2 className="text-gradient">Compétences Techniques</h2>
          <p>Voici les technologies que je maîtrise pour réaliser vos projets avec excellence.</p>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

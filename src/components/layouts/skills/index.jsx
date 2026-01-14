// components/Skills.jsx
import React from "react";
import styles from "./skills.module.css";

const Skills = () => {
  const skillSets = [
    {
      category: "Frontend Development",
      items: [
        "React",
        "JavaScript (ES6+)",
        "TypeScript",
        "MUI / Bootstrap",
        "HTML5 / CSS3",
      ],
    },
    {
      category: "Backend & Cloud",
      items: [
        "Python / FastAPI",
        "PostgreSQL / MySQL",
        "Redis",
        "AWS (EC2, S3, Lambda)",
      ],
    },
    {
      category: "Others & Tools",
      items: [
        "Socket.IO",
        "Git / GitHub Workflow",
        "Google Apps Script",
        "LaTeX",
      ],
    },
  ];

  return (
    <section id="skills" className={styles.container}>
      {skillSets.map((set, index) => (
        <div key={index} className={styles.category}>
          <h3>{set.category}</h3>
          <ul className={styles.skillList}>
            {set.items.map((skill, i) => (
              <li key={i} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;

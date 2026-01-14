import { useEffect, useState } from "react";
import styles from "./hero.module.css";
import Item from "../../prototypes/item";

const navItems = [
  { title: "Experience", href: "#experience", id: "experience" },
  { title: "Projects", href: "#projects", id: "projects" },
  { title: "Skills", href: "#skills", id: "skills" },
];

const Hero = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.heroContent}>
      <div>
        <h1 className={styles.name}>Jia Hsuan Ho</h1>
        <h2 className={styles.title}>前端工程師</h2>

        <p className={styles.tagline}>
          台北商業大學資管系畢業。擁有 2 年以上 React
          開發經驗，參與產品開發，負責前端畫面實作、即時互動功能與 API 串接
        </p>

        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              href={item.href}
              isActive={activeId === item.id}
            />
          ))}
        </nav>
      </div>

      <a
        href="https://github.com/jiahsuan02"
        className={styles.socialLinks}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  );
};

export default Hero;

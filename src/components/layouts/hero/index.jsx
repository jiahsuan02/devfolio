import styles from "./hero.module.css";
import Item from "../../prototypes/item";
import useScrollSpy from "../../../hooks/useScrollSpy";

const Hero = () => {
  const navItems = [
    { title: "Experience", href: "#experience", id: "experience" },
    { title: "Projects", href: "#projects", id: "projects" },
    { title: "Skills", href: "#skills", id: "skills" },
  ];

  const ids = navItems.map((i) => i.id);
  const [activeId, handleNavClick] = useScrollSpy(ids, {
    rootMargin: "0px 0px -40% 0px",
    threshold: [0, 0.25, 0.5, 0.75],
    debounceMs: 120,
  });

  return (
    <div className={styles.heroContent}>
      <div>
        <h1 className={styles.name}>Jia Hsuan Ho</h1>
        <h2 className={styles.title}>前端工程師</h2>

        <p className={styles.tagline}>
          台北商業大學資管系畢業。擁有 2 年以上 React
          開發經驗，參與產品開發，負責前端畫面實作、即時互動功能與 API 串接
        </p>

        <nav className={styles.navLinks} aria-label="menu">
          {navItems.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              href={item.href}
              isActive={activeId === item.id}
              onClick={(e) => handleNavClick(e, item.id)}
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

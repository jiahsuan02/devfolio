import styles from "./item.module.css";

const Item = ({ title, href, isActive }) => {
  return (
    <a
      href={href}
      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
    >
      <span className={styles.navLine}></span>
      <span className={styles.navText}>{title}</span>
    </a>
  );
};

export default Item;

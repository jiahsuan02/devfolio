import styles from "./item.module.css";

const Item = ({ title, href, isActive, onClick }) => {
  return (
    <a
      href={href}
      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
      aria-current={isActive ? "true" : "false"}
      onClick={onClick}
    >
      <span className={styles.navLine} aria-hidden="true"></span>
      <span className={styles.navText}>{title}</span>
    </a>
  );
};

export default Item;

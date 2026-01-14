import styles from "./sectionTitle.module.css";

const SectionTitle = ({ title }) => {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
};

export default SectionTitle;

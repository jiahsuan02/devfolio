import styles from "./tag.module.css";

const Tag = ({ tag }) => {
  return (
    <span className={styles.tag}>
      {tag}
    </span>
  );
};

export default Tag;

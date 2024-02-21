import styles from "./DisplayColors.module.css";
const DisplayColors = ({ style }) => {
  return (
    <div className={styles.display}>
      <div className={styles.underDisplay} style={style}></div>
    </div>
  );
};
export default DisplayColors;

import styles from "./SmallBox.module.css";
const SmallBox = ({ clr, colorClickHandler, deleteHandler, clrIndex }) => {
  return (
    <div>
      <div>
        <button
          className={styles.smallBox}
          style={{ backgroundColor: clr }}
          onClick={() => {
            colorClickHandler(clr);
          }}
        ></button>
      </div>
      <div className={styles.del}>
        <button
          style={{ backgroundColor: clr }}
          onClick={() => {
            deleteHandler(clrIndex);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SmallBox;

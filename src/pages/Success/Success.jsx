import styles from "./Success.module.css";

const Success = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messageBox}>
        <div className={styles.icon}>✅</div>
        <div>You are registered!</div>
      </div>
    </div>
  );
};

export default Success;

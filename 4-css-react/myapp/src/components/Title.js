import styles from "./Title.module.css";

const Title = ({name}) => {
  return (
    <div className={styles.my_title}>
      Este elemento foi estilizado com CSS modules
      <hr />
      Olá {name}
    </div>
  );
}

export default Title;
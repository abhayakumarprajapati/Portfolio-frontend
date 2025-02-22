import Navbar from "./Navbar/page";
import styles from './styles.module.css'


export default function Home() {
  console.log("render page")

  return (
    <>
      <div style={{ background: "linear-gradient(90deg, rgba(1,14,35,1) 49%, rgba(67,61,66,1) 100%, rgba(15,15,150,1) 100%)" }}>
        <Navbar />
        <div className={styles.mainContainer}>
          <div className={styles.textContainer}>
            <p className={`${styles.textStyle} ${styles.tomato}`}>HELLO!</p>
            <h1 className={`${styles.white} ${styles.textStyle}`}>I Am Abhay Prajapati</h1>
            <p className={`${styles.white} ${styles.textStyle}`}>
              I am a Full stack developer with more than 2 years of experience. My expertise is to create and design websites.
            </p>
          </div>
          <div className={styles.imageContainer}>
            Image
          </div>
        </div>
      </div>
    </>
  );
}

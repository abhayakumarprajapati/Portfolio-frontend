import Navbar from "./Navbar/page";
import styles from './styles.module.css'
import Image from 'next/image';


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
            <div className={styles.buttons}>
              <button style={{ marginRight: "10px" }}>View Work</button>
              <button>Hire me</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/images/abhaypic.jpg" alt="Profile Image" width={500} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}


import styles from './home.module.scss'


import { Profile } from '../components/Profle';
import { Canvas } from '../components/Canvas';

export default function Home() {
  return (
    <div className={styles.contentContainer}>
   
      <section>
        <h2 className={styles.title}>
          <span>Hi There, I'm</span>
            <strong>Arlen Resende</strong>
          <span>Front End Developer</span>
        </h2>
      </section>
      <Profile />
    </div>
  )
}

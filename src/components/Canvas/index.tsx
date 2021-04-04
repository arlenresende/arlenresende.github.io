
import styles from './styles.module.scss'

export function Canvas() {

    return(
       
       <>
        <div className={styles.canvas}>
            <div className={styles.star}></div>
            <div className={styles.stars2}></div>
            <div className={styles.stars3}></div>
        </div>
       </>

    );
}
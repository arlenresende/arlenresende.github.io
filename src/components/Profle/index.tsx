
import styles from './styles.module.scss';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';




export function Profile(){
    return(
       <div className={styles.box}>
           <div className={styles.contentBox}>
                <img src="https://dummyimage.com/370x370/000/fff" alt=""/>
                <div className={styles.text}>
                    <h3>Front End Developer. <br/>
                    Based in Minas Gerais, Brazil. I'm Code things for Web.
                    </h3>
                    <img src="/images/zigzag.svg" alt=""/>
                    <p><strong>I am a professional web designer from Brazil.</strong> 
                    Consectetur adipisicing elit olore iusto cupiditate possimus amet aliquam
                    qui voluptatem. Animi perferendis Minima nemo blanditiis rem odio provident
                     delectus ab magni omnis optio. Architecto debitis mollitia itaque eius 
                     accusamu.</p>
                     <div className={styles.social}>
                        <a href=""><FaLinkedin size={25} /></a>
                        <a href=""><FaGithub size={25}/></a>
                        <a href=""><FaInstagram size={25} /></a>
                  
                     </div>
                </div>
           </div>
       </div>
    );
}
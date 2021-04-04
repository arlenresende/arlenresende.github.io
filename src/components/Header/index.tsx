
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

export function Header(){

   
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
             
                    <Link href="/" >
                        <h1 className={styles.titleDesk}>
                            <span> &lt; </span>
                            <strong>ArlenResende</strong>
                            <span> /&gt; </span>
                        </h1>   
                    </Link>
               
               
                    <Link href="/" >
                        <h1 className={styles.titleMob}>
                            <span> &lt; </span>
                            <strong>AR</strong>
                            <span> /&gt; </span>
                        </h1>
                    </Link>
               
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active} >
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/blog" activeClassName={styles.active} >
                        <a>Blog</a>
                    </ActiveLink>
                 
                  
                  
                </nav>
            </div>
        </header>
    );
}
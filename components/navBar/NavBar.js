import styles from '../../styles/NavBar.module.css'
import Link from 'next/link'


export default function NavBar() {
    
    return(
        <div>
        <nav>
        <ul className={styles.navbar} >
            <li>
                <Link href = "/about">APLLY</Link>   
            </li>
            <li>
                <Link href="#">CONTA</Link>
            </li>
        </ul>
        </nav>
        </div>
    )
}
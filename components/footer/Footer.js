import styles from "../../styles/Footer.module.css"
export default function Footer() {
    return(
      <footer>
      <nav>
          <ul className={styles.footer}>
              <li><a href="#">Sobre o autor</a></li>
              <li><a href="#">Mapa do site</a></li>
              <li><a href="#">Entre em contato</a></li>
          </ul>
          </nav>
      </footer>
    )
}
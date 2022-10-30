import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import SideNavBar from '../components/sideNavBar/SideNavBar'
import Body from '../components/body/Body'

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* <SideNavBar /> */}
      <Body />
      <Footer />
    </div>
  )
}

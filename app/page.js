import Image from 'next/image'
import styles from './page.module.css'
import Main from './comp/Main'
import Headers from './pages/header/page'
import Footer from './pages/footer/page'

export default function Home() {
  return (
    <>
      <Headers/>
      <Main/>
      <Footer/>
    </>
  )
}

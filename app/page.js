import Image from 'next/image'
import styles from './page.module.css'
import Headers from './pages/header/page'
import Main from './comp/Main'
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

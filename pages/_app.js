import '../styles/globals.css'
import Layout from '../layout/Layout'
import Main from '../layout/Main/Main'

function MyApp({ Component, pageProps }) {
  return (
    //<Main>
      <Component {...pageProps} />
    //</Main>
  )
}

export default MyApp

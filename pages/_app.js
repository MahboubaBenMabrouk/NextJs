import Layout from '../components/Layout'
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/owl.carousel.min.css"
import "../public/assets/css/ticker-style.css"
import "../public/assets/css/flaticon.css"
import "../public/assets/css/slicknav.css"
import "../public/assets/css/animate.min.css"
import "../public/assets/css/magnific-popup.css"
import "../public/assets/css/fontawesome-all.min.css"
import "../public/assets/css/themify-icons.css"
import "../public/assets/css/slick.css"
import "../public/assets/css/nice-select.css"
import "../public/assets/css/style.css"


function MyApp({ Component, pageProps }) {
  return (
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
      )
}

export default MyApp

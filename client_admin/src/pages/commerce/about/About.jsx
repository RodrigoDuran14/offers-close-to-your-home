import React from 'react'
import Logo from "../../../assets/images/LogoCompleto.png"
import styles from "./About.module.css"

const logo = Logo;

const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.titulo}>
        <h1>¿Qué es Just<span style={{ color: 'var(--green-color)' }}>Offers</span>?</h1>
      </div>

      <div className={styles.texto}>
        <div>
          <img className={styles.img} src={logo} />
        </div>

        <div className={styles.parrafos}>
          <p>
            Bienvenidos a JustOffers, el marketplace donde las PYMES pueden llegar
            a más clientes a través de ofertas y promociones, mientras que los
            compradores pueden encontrar grandes ofertas en una variedad de
            productos y servicios. En JustOffers, creemos que todas las empresas
            merecen la oportunidad de expandirse y llegar a nuevos mercados, y que
            los compradores merecen acceso a los mejores precios y ofertas
            disponibles.
            <br></br>
            <br></br>
            Fundada el 27 de abril del 2023, nuestra plataforma se ha convertido
            en una fuente confiable para PYMES y compradores por igual. Para los
            compradores, ofrecemos una amplia variedad de ofertas y promociones en
            una variedad de categorías, desde electrónica hasta servicios locales
            y todo lo demás. Nuestra plataforma es fácil de usar y navegar, lo que
            permite a los compradores encontrar y comprar ofertas en cuestión de
            minutos.
            <br></br>
            <br></br>
            En JustOffers, nos enorgullece nuestro compromiso con la calidad, la
            transparencia y la justicia en todos los aspectos de nuestro negocio.
            <br></br>
            <br></br>

          </p>
        </div>
      </div>
    </div>
  )
}

export default About

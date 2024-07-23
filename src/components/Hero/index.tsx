import { FundoHero, Imagem, Frase } from './styles'

import logo from '../../assets/images/logo.svg'
import heroImg from '../../assets/images/fundo.png'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <FundoHero>
      <img src={logo} alt="efood" />
    </FundoHero>
    <Frase>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Frase>
  </Imagem>
)
export default Hero

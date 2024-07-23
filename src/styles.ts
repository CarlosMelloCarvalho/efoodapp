import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#fff',
  salmaoClaro: '#FFF8F2',
  salmao: '#FFEBD9',
  salmaoEscuro: '#E66767'
}

export const GlobalCss = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif
}

body {
background-color: ${cores.salmaoClaro};
color: ${cores.salmaoEscuro}
}
`

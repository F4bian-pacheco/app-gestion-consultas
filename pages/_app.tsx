import type { AppProps } from 'next/app'
import { useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider, DefaultTheme, useTheme } from 'styled-components'
import GlobalStyle from '../components/styled/globalstyles'
import Dashboard from '../components/hocs/Dashboard'
import login from './login'
import index from './index'
import { ThemeContext, TemaProvider } from '../context/TemaProvider'
import ToggleSwitch from '../components/toggle'
import { cookies } from 'next/dist/client/components/headers'


const theme: DefaultTheme = {
  colors: {
    primary: '#0f0f0f',
    secondary: '#01a1dd',
    background: '#f2f2f2',
    secondaryBackground: '#d1d1d1',
    primaryHover: '#55aaff',
    secondaryHover: '#3d89d4',
  },
}

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#f0f0f0',
    secondary: '#243e84',
    background: '#2e2d2d',
    secondaryBackground: '#414040',
    primaryHover: '#3C91E6',
    secondaryHover: '#3C91E6',
  },
}

function ThemeWrapper({ children }) {
  const { tema } = useContext(ThemeContext);
  // const [temaState, setTemaState] = useState(() => {
  //   if (typeof localStorage !== 'undefined') {
  //     return localStorage.getItem('tema') || 'light';
  //   } else {
  //     return 'light';
  //   }
  // });
  // console.log(`tema themewrapper: ${temaState}`);

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('tema');
  //   if (storedTheme) {
  //     setTemaState(storedTheme);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (typeof localStorage !== 'undefined') {
  //     localStorage.setItem('tema', temaState);
  //   }
  // }, [temaState]);

  const updatedColors = tema === 'dark' ? darkTheme.colors : theme.colors;
  const updatedTheme = {
    ...theme,
    colors: updatedColors,
  };

  return (
    <ThemeProvider theme={updatedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default function App({ Component, pageProps }: AppProps) {

  // const { tema } = useContext(ThemeContext); //! pendiente
  // use localstorage to get the theme
  // const tema = localStorage.getItem('tema');
  // console.log(`tema: ${tema}`)

  return (
    <TemaProvider>
      <ThemeWrapper>
        {Component === login || Component === index ? (
          <Component {...pageProps} />
        ) :
          (
            <Dashboard>
              <Component {...pageProps} />
            </Dashboard>
          )}
      </ThemeWrapper>
    </TemaProvider>
  )

}




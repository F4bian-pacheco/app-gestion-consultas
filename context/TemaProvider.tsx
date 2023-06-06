import { createContext, useState } from 'react';

interface ThemeContextType {
  tema: string;
  toggleTema: (tema: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  tema: '',
  toggleTema: () => { }
});

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState<string>('light');

  const toggleTema = (temaNuevo) => {
    // Lógica para cambiar el tema y realizar otras acciones necesarias
    // const nuevoTema = tema === 'light' ? 'dark' : 'light';
    console.log('Tema que se cambiara:', temaNuevo);
    const nuevoTema = temaNuevo;
    setTema(nuevoTema);

    // use localstorage or cookies to save the theme
    // localStorage.setItem('tema', nuevoTema);

    console.log('Tema cambiado a:', nuevoTema);
  };

  const contextValue = {
    tema: tema,
    toggleTema: toggleTema,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, TemaProvider };

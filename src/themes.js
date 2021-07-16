import { createGlobalStyle } from 'styled-components';

export const lightTheme ={
body:"#ffffff",
fontColor: "#737373",
};

export const darkTheme ={
body:"#333333",
fontColor: "#f2f2f2",
};

export const lightThemesecond ={
  body:"#ffffff",
  fontColor: "#737373",
  };
  
  export const darkThemesecond ={
  body:"#333333",
  fontColor: "#f2f2f2",
  };

export const GlobalStyles = createGlobalStyle`

body{
  background-color: ${(props) => props.theme.body};
}
`;
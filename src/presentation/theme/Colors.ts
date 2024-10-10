import { createTheme } from "@mui/material";

export const LightTheme = createTheme ({
    palette:{
        primary:{
            main: '#000000', /*#DECEB9*/
            dark: '#653315', //Marrom Escuro
            light: '#DEAD6F', //Marrom Claro (creme)
            contrastText: '#FFFFFF', //Branco
        },
        secondary:{
            main: '#E52A2A', //Vermelho
            dark: '#F56464', //hover do botao featured
            light: '#F59580',
            contrastText: '#FFFFFF',
        },
        background:{
            default:'#000000',
            paper:'#201E1D'
        },
        text:{
            secondary: '#FFFFFF'
        }
    }
});
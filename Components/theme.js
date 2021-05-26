import { createGlobalStyle } from 'styled-components';

export const lightTheme={
        body:'hsl(0, 0%, 98%)',
        element:'white',
        text:'hsl(235, 19%, 35%)',
}

export const darkTheme={
        body:'hsl(235, 21%, 11%)',
        element:'hsl(235, 24%, 19%)',
        text:'white',

}

export const GlobalStyles=createGlobalStyle`

    body{
        background-color:${({ theme }) => theme.body};
        transition: all 0.25s linear;
    }
    input[type="text"]{
        background-color:${({ theme }) => theme.element};
        color:${({ theme }) => theme.text};
        transition: all 0.25s linear;
    }
    .tache-item{
        background-color:${({ theme }) => theme.element};
        transition: all 0.25s linear;
    }
    .tache-item span{
        color:${({ theme }) => theme.text};
    }
    .footer-taches{
        background-color:${({ theme }) => theme.element};
        transition: all 0.25s linear;
    }
    .footer-taches .place:hover{
        color: black;
    }
    
`;

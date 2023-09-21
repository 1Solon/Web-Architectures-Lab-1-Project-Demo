import { createTheme } from '@mui/material/styles';

export function ThemeLight() {
    return (createTheme({
        palette: {
            primary: {
                light: '#3c3c3c',
                main: '#1c1c1c',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
            background: {
                default: "#eaeaea"
            },
        },
    }))
}

export function ThemeDark() {
    return (createTheme({
        palette: {
            primary: {
                light: '#3c3c3c',
                main: '#3c3c3c',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
            background: {
                default: "#1c1c1c",
                paper: "#3c3c3c"
            },
        },
        typography: {
            allVariants: {
                color: "white"
            },
        },
    }))
}
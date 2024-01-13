import { Inter, Domine, Homemade_Apple } from "next/font/google";
import { createTheme } from "@mui/material/styles";



const homeMadeApple = Homemade_Apple({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const domine = Domine({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#174D24",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
   
  },

  typography: {
    fontFamily: inter.style.fontFamily,
    h3: {
      fontFamily: domine.style.fontFamily,
    },
    h4: {
      fontFamily: domine.style.fontFamily,
    },
    h5: {
      fontFamily: domine.style.fontFamily,
    },
    h6: {
      fontFamily: domine.style.fontFamily,
    },
    body2: {
      fontFamily: homeMadeApple.style.fontFamily,
    }
   
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;

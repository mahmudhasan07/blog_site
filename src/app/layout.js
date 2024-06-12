import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar";
import TankStackQuery from "./Hooks/TankStackQuery";

// import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <head>
        <link rel="icon" href="https://i.ibb.co/f9g36Zz/exploresphere-high-resolution-logo-transparent-1.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <NavBar></NavBar>
        <TankStackQuery>
        {children}
        </TankStackQuery>

      </body>
    </html>
  );
}

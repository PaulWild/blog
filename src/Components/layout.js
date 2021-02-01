import React, { useEffect, useState } from "react"
import NavBar from "./nabar";
import "@fontsource/fira-code"
import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0; 
    background-color: #eeeeee;  
    font-family: "Fira Code", monospace; 
  }
`

const Main = styled.main`
  margin: auto;
  max-width: 960px;
  padding: 1em;
`


export default function Layout({children}) {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
      setIsReady(true);
    }, []);

  
    return (
        <>
        { isReady && 
          <>
            <NavBar />
            <Main>
                {children}
            </Main>
          </>
        }
        </>
    )
}
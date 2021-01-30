import React from "react"
import Layout from "/src/Components/layout"
import "prismjs/themes/prism-okaidia.css"

export const wrapPageElement = ({ element, props }) => {
    return(
        <>
            <GlobalStyle />
            <Layout {...props}>{element}</Layout>
        </>)
}
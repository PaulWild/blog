import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "@fontsource/fira-code"

const OL = styled.ol`
  width: 100%;
  overflow:auto; 
  font-family: "Fira Code"; 
  font-weight: bold;
  align-items: center;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`

const A = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 1em 2em 1em 2em;
  display: inline-block;
  min-width: ${props => props.minWidth ? props.minWidth : "0"};
  
  &:hover {
    background-color: #dddddd;
  }
`

export default function NavBar() {

    const text = "<Paul Wild />"

    return (
        <nav>
                <OL>
                    <li><A minWidth={"8em"} to="/" >{text}</A></li>
                    <li><A  to="/posts">Posts</A></li>
                    <li><A  to="/about">About</A></li>
                    <li><A  to="/projects">Projects</A></li>
                </OL>
        </nav>)
}
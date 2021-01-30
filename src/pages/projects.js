import * as React from "react"
import { graphql } from "gatsby"
import Header from "../Components/header";
import styled from "styled-components";
import StyledLink from "../Components/styledLink";

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`

const ProjectSection = styled.section`
  max-width: 20em;
  padding: 1em
`

const HeroImage = styled.img`
  width: 100%
`



const Project = ({title, description, link, siteImage}) => {
    return (
        <ProjectSection>
            <Header>
                <h1>{title}</h1>
            </Header>
            <StyledLink href={link}>
            <HeroImage src={siteImage.file.url} alt={siteImage.description}/>
            </StyledLink>
            <section dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
        </ProjectSection>
    )
}

const Projects = ({data}) => {
    return (<ProjectsDiv>
        {data.allContentfulProject.edges.map(project => Project(project.node))}
    </ProjectsDiv>)

}

export default Projects;

export const pageQuery =  graphql`
    query {
    allContentfulProject {
        edges {
            node {
                title
                description {
                    childMarkdownRemark {
                        html
                    }
                }
                link
                siteImage {
                    description
                    file {
                        url
                    }
                }
            }
        }
    }
}`

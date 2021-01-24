import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/layout";
import styled from "styled-components"

const Avatar = styled.img`
  border-radius: 50%;
`

const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: end;
  
  > * {
        margin-right: 0.5em;
        margin-top: 0.5em
  }
  
`

const Name = styled.h1`
  margin: 0;
`

const About = ({ data }) => {
    return (<Layout>
        <AboutSection>
            <Avatar src={`https:${data.contentfulPerson.image.file.url}`} alt="Girl in a jacket" width="200" height="200"/>
            <div>
                <Name>{data.contentfulPerson.name}</Name>
                <h4>{data.contentfulPerson.title} @ {data.contentfulPerson.company}</h4>
            </div>
        </AboutSection>
        <div dangerouslySetInnerHTML={{  __html: data.contentfulPerson.shortBio.childMarkdownRemark.html}} />
</Layout>)
}

export const query = graphql`
    {
        contentfulPerson(contentful_id: {eq: "6hz3kRAHwCIdfEA8OLZXly"}) {
            company
            github
            image {
                file {
                    url
                }
            }
            name
            shortBio {
                childMarkdownRemark {
                    html
                }
            }
            title
            twitter
        }
    }
`

export default About
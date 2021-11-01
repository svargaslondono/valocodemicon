import * as React from "react"
import { graphql } from "gatsby"
import Concept from "../components/concept"
import Header from "../components/header"
import "@fontsource/dm-serif-display"
import "@fontsource/maven-pro"
import "../styles/home.scss"

const IndexPage = ({
  data: {
    allContentfulConcept: { nodes },
  }
}) => {
  return (
    <main className="home">
      <title>valocodemicon</title>
      <Header/>
      <p>
        A knowledge compendium for web development. An interview preparation tool.
      </p>
      <div className="home__content">
        {nodes.map((item, index) =>
          <Concept key={index} info={item} customClasses="home__concept"/>
        )}
      </div>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulConcept(limit: 3) {
      nodes {
        name
        description {
          raw
        }
        shortDescription
      }
    }
  }
`
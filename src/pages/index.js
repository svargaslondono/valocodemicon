import * as React from "react"
import { graphql } from "gatsby"
import Concept from "../components/concept"
import "../styles/home.scss"

const IndexPage = ({
  data: {
    allContentfulConcept: { nodes },
  }
}) => {
  return (
    <main className="home">
      <title>Home Page</title>
      <h1 className="home__title">
        Valocodemicon
      </h1>
      <p>
        A knowledge compendium for web development. An interview preparation tool. Updated weekly!
      </p>
      <div className="home__latest">
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
import * as React from "react"
import { graphql } from "gatsby"
import Concept from "../components/concept"

const pageStyle = {
  alignItems: "center",
  backgroundColor: "#121212",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center"
}

const titleStyle = {
  color: "white",
  fontSize: "48px",
  letterSpacing: "1px"
}

const latestListStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "48px -20px 0",
  textAlign: "center"
}

const conceptStyle = {
  margin: "0 20px"
}

const IndexPage = ({
  data: {
    allContentfulConcept: { nodes },
  }
}) => {
  return (
    <main style={pageStyle}>
      <title>Home Page</title>
      <h1 style={titleStyle}>
        Valocodemicon
      </h1>
      <p>
        A knowledge compendium for web development. An interview preparation tool. Updated weekly!
      </p>
      <div style={latestListStyle}>
        {nodes.map(item =>
          <div style={conceptStyle}>
            <Concept info={item}/>
          </div>
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
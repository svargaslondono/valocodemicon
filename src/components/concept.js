import * as React from "react"

const containerStyle = {
  backgroundColor: "rgba(255, 255, 255, .05)",
  borderRadius: "5px",
  color: "white",
  padding: "20px"
}

const titleStyle = {
  fontFamily: "Harry Potter"
}

const contentStyle = {
  marginTop: "16px"
}

const IndexPage = ({
  info
}) => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{info.name}</h2>
      <p style={contentStyle}>{info.shortDescription}</p>
    </div>
  )
}

export default IndexPage

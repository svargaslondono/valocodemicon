import * as React from "react"
import "../styles/concept.scss"

const Concept = ({
  info,
  customClasses
}) => {
  return (
    <div className={"concept" + (customClasses ? ' ' + customClasses : '')}>
      <h2 className="concept__title">{info.name}</h2>
      <p className="concept__content">{info.shortDescription}</p>
    </div>
  )
}

export default Concept

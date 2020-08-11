import React from "react"
import "./card-list.styles.css"

// props are attributes you add to a component where it's being used/rendered (we get access to the props parameter available in the component itself)
// props has a children property which is the data that's inbetween an opening/closing component tag (where it's used)
export const CardList = props => {
  return (
    <div className="card-list">{props.children}</div>
  )
}
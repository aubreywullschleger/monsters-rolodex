import React from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asdf",
        },
        {
          name: "Dracula",
          id: "fdsa",
        },
        {
          name: "Zombie",
          id: "hjkl",
        },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(({id, name}) => (
          <h1 key={id}>{name} </h1>
        ))}
      </div>
    )
  }
}

export default App

import React, { useState } from "react"
import "./App.css"
import Node from "./Components/Node"

export interface TypeNode {
  id: string
  title: string
  children: Array<TypeNode>
}

const App: React.FC = () => {
  const data: TypeNode = {
    id: "1",
    title: "Node 1",
    children: [
      {
        id: "1.1",
        title: "Node 1.1",
        children: [
          {
            id: "1.1.1",
            title: "1.1.1",
            children: [],
          },
          {
            id: "1.1.2",
            title: "1.1.2",
            children: [
              {
                id: "1.1.2.1",
                title: "1.1.2.1",
                children: [],
              },
              {
                id: "1.1.2.2",
                title: "1.1.2.2",
                children: [],
              },
            ],
          },
        ],
      },
      { id: "1.2", title: "Node 1.2", children: [] },
    ],
  }

  const [node, setNode] = useState<TypeNode>(data)

  return (
    <div className="App">
      <div className="list">
        {node.children.map((node, index) => (
          <Node node={node} key={index} />
        ))}
      </div>
    </div>
  )
}

export default App

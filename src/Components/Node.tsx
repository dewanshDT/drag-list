import React from "react"
import { TypeNode } from "../App"

interface Props {
  node: TypeNode
}

const Node: React.FC<Props> = ({ node }) => {
  return (
    <div className="node" draggable>
      <h3>{node.title}</h3>
      {node.children.length > 0 && (
        <div className="list">
          {node.children.map((node, index) => (
            <Node node={node} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Node

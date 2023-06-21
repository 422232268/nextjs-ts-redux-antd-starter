//@ts-nocheck
import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { applyDrag, generateItems } from './utils'
import styled from 'styled-components'

const DragHandle = () => {
  const [items, setItems] = useState(
    generateItems(50, (index) => {
      return {
        id: index,
        data: 'Draggable' + index,
      }
    })
  )

  const SimplePage = styled.div`
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  `

  const DraggableItem = styled.div`
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    background-color: #fff;
    outline: 0;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 2px;
    margin-top: 2px;
  `

  const Action = styled.span`
    float: right;
    padding: 0 10px;
    :hover {
      cursor: move;
    }
  `
  return (
    <div>
      <SimplePage>
        <Container dragHandleSelector=".column-drag-handle" onDrop={(e) => setItems(applyDrag(items, e))}>
          {items.map((p) => {
            return (
              <Draggable key={p.id}>
                <DraggableItem>
                  <Action className="column-drag-handle">&#x2630;</Action>
                  {p.data}
                </DraggableItem>
              </Draggable>
            )
          })}
        </Container>
      </SimplePage>
    </div>
  )
}

export default DragHandle

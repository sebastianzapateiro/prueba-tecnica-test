

import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore";

export function PokemonCardF(props) {
  return (
    <Card style={{ width: '16.3rem' }}>
      <Card.Img className='img-pokemon p-2' variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='name-pokemon'>{props.nombre}</Card.Title>
        <Card.Text>
          <p><span>Id: </span>{props.id}</p>
          <p>Evoluciones: &nbsp; {props.evolucion}</p>
          <p>
            Tipos: &nbsp;{props.tipo}
          </p>

        </Card.Text>
        

      </Card.Body>
    </Card>
  )
}


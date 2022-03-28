import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'

export function Cards() {
    const userStored = localStorage.getItem('user')
    const carnet = localStorage.getItem('carnet')
    // obtengo los datos de local storage
    

    return (
        <div>
            <br />
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item as={"h3"}>Carnet</ListGroup.Item>
                    <ListGroup.Item>{carnet}</ListGroup.Item>
                    <ListGroup.Item as={"h3"}>Usuario</ListGroup.Item>
                    <ListGroup.Item>{userStored}</ListGroup.Item>
                </ListGroup>
            </Card>

        </div>
    )
}
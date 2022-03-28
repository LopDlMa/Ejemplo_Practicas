import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'



export function Cards() {
    const [usuario, setUsusario] = useState(null)
    const [password, setPassword] = useState(null)
    const redirect = useNavigate() // con esto puedo redirigirme a una pagina que desee, pero tomar nota que es una YA CREADA
  //  const history = useHistory() 

    
    const handleSubmit = (e) => {
        e.preventDefault() // permanecen los datos
        const data ={
            usuario,
            password
        }
     //   console.log(data)
        Axios.post('/login',data)
            .then(res =>{
              
                /*creo una validación, si me devolvió algo significa
                que el usuario existe y puede ingresar, en caso que la longitud
                sea = a 0, es porque el usuario no existe
                */
               if(res.data != null){
                   /* LOCALSTORAGE -> este almacena el dato que esté en uso en el momento
                   evita que otros datos se interpongan, digase loggearse con otra cuenta a los
                   mismos datos que la primera cuenta */
                   localStorage.setItem("user",res.data.usuario)
                   localStorage.setItem("carnet",res.data.carnet)
                   //console.log(res.data.usuario)
                   redirect('/datos')
                   
               } 
            })

    }

    return (
        <div>
            <br />
            <Card style={{width:"45rem"}}>
                <Card.Header as="h3" >Login</Card.Header>
                <Card.Body>
                    <p>aquí pueden insertar una imagen :D</p>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control type="text" placeholder="Usuario" onChange={e=> setUsusario(e.target.value)} value={usuario} />
                            <Form.Text className="text-muted">
                               Recuerden que para haber login, se necesita un sign up
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value = {password} />
                            <Form.Text className = "text-muted">Es recomendable encriptar la información. Esto
                                se hace más fácilmente desde el backend
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>


        </div>
    )
}
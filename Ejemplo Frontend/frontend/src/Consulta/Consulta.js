import React, {useState, useEffect} from "react";
import {Table,Card} from 'react-bootstrap'

import Axios from 'axios'

//Que es use effect?
//Sirve para hacer pre cargas de datos previo a mostrar la página


export function Consulta(){
    const[info, setInfo] = useState([])
                //por que en algunos si ponemos e y en otros no?  
                //la e es usada como parametro, puede o no ir conforme se necesite
    useEffect(()=>{ 
        Axios.get("/leer")
            .then(res => {
                //en esta seccion colocamos que queremos que suceda con la informacion
                //que viene con el get
                setInfo(res.data) // ahora le seteamos a Info todo lo que venga en el endpoint leer
            })

    },[]) //[] carga 1 vez, si no se pone lo hae n veces 


    return(
        <div>
            <center>
                <br></br>
            <Card style={{ width: '43rem' }} border="success">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Curso</th>
                        <th>Creditos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /*mapeamos lo que está guardado en map*/
                        info.map((datos)=>{
                            return(
                                <tr>
                                    {/*en get nos retorna un objeto json y este posee etiquetas
                                    asi que se coloca datos.etiqueta*/}
                                    <th>{datos.codigo}</th>
                                    <th>{datos.nombre}</th>
                                    <th>{datos.creditos}</th>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </Table>
            </Card>
            </center>
        </div>
    );
}
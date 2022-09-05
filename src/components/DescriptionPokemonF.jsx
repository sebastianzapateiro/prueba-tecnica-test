
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDataFireStore, getDate } from '../helpers/CRUD';
import { doc, deleteDoc } from "firebase/firestore";
import NavBar from './NavBar';
import { db } from '../firebase-config';

export function DescriptionPokemonF() {

  const [pokemonDatosS, setPokemonDatosS] = useState([]);
  const [pokemonDatos, setPokemonDatos] = useState([]);
  const [datapokemonF, setDataPokemonF] = useState([]);
  let [valorConsultar, setValorConsultar] = useState([]);

  let { name } = useParams();

  


const eliminarPokemon = async () =>{
  await deleteDoc(doc(db, "pokemon", name));

}


const deletePokemon = ()=>{
   eliminarPokemon();
   /* return navigate('/home') */
  }

  async function getDataF() {
    try {
      const data = await getDataFireStore('pokemon');
      setDataPokemonF(data);

    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {

    getDataF();

    setValorConsultar = datapokemonF.filter((valor) => valor.id == name);

  }, [])




  return (
    <>
      {/* <NavBar /> */}

      <Container className='mt-5'>

        <div className='d-flex justify-content-center flex-wrap mb-4'>
          #{datapokemonF[0]?.id}

          <span> {datapokemonF[0]?.nombre}</span>
        </div>
        <Row>
          <Col>
            <img src={datapokemonF[0]?.imagen} alt={datapokemonF[0]?.nombre} />
          </Col>
          <Col>
            <div className='d-flex flex-column'>
              <p className='description-pokemon'>
                Desde que nace, crece alimentándose de los nutrientes que contiene la semilla de su lomo.

              </p>

              <div><span>Tipos: </span>
                {datapokemonF[0]?.tipo}
              </div>
              <div><span>Altura: </span><span>{datapokemonF[0]?.altura}</span></div>
              <div><span>Peso: </span><span>{datapokemonF[0]?.peso}</span></div>
              <div><span>Abilidades: </span>{datapokemonF[0]?.abilidad}</div>
              <div><span>Grupo de huevos: </span>

                <span>
                  {datapokemonF[0]?.egg}
                </span></div>
<div className='d-flex'>
{/* <div className='text-center mt-4'><Link to={'/edit-pokemon/' + name}><Button variant="primary">Editar pokemon!</Button></Link></div>
<div className='text-center mt-4'><Button onClick={deletePokemon} variant="primary">Eliminar pokemon!</Button></div> */}
</div>
              

            </div>

          </Col>
        </Row>

      </Container>
    </>
  )
}


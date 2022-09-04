
import React, { useEffect, useRef, useState } from 'react'
import {PokemonCard} from './PokemonCard'
import {PokemonCardF} from './PokemonCardF'
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';

import { getDataFireStore, getDate } from '../helpers/CRUD';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Home() {

  const [datePokemon, setDatePokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [wsearchPokemon, setWSearchPokemon] = useState('');
  const [dataPokemonF, setDataPokemonF] = useState([]);
  const filtro = useRef('');


  const searchApi = () => {

    setSearchPokemon(filtro.current.value);
  }
  const firestore = () => {

  }
  async function getDataF() {
    try {
      const data = await getDataFireStore('pokemon');
      setDataPokemonF(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {



    async function getData() {

      let valueGet = 25;
      let data;

      if (searchPokemon.length >= 3 && wsearchPokemon == 'searchApi') {
        valueGet = 600;
      }



      try {

        if (searchPokemon.length >= 3 && wsearchPokemon == 'searchApi') {


          data = await getDate('pokemon', valueGet);

          setDatePokemon(data.results.filter(({ name }) => name.includes(searchPokemon)));
        }


        else if(wsearchPokemon == 'firestore'){
          setDatePokemon([]);
          getDataF();
        }
        else if(wsearchPokemon == 'searchApi'){
          setDataPokemonF([]);
          const data = await getDate('pokemon', valueGet);
          console.log(data);
          setDatePokemon(data.results);
        }

        else {
          const data = await getDate('pokemon', valueGet);
          setDatePokemon(data.results);
        }


      } catch (e) {
        console.log(e);
      }
    }

    getData();


  }, [searchPokemon, wsearchPokemon])



  return (
    <>
      <NavBar />

      
{console.log(datePokemon)}
      <Container className='mt-5'>


        <InputGroup className="my-4">
          <Form.Control onChange={(e) => setSearchPokemon(e.target.value)} aria-label="Text input with dropdown button" placeholder='Search by filter - Seleccione el origin para poder filtrar' />

          <DropdownButton
            variant="outline-secondary"
            title="Origin"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#" className='link-api' onClick={() => setWSearchPokemon('searchApi')}>Pokemon API</Dropdown.Item>
            <Dropdown.Item href="#" className='link-api' onClick={() => setWSearchPokemon('firestore')}>Firestore</Dropdown.Item>
          </DropdownButton>
        </InputGroup>

<h4>Los pokemons listados vienen desde: {wsearchPokemon}</h4>

        <div className='gap-4 d-flex flex-wrap  justify-content-center'>


          {
            datePokemon?.map((value, llave) => (
              <PokemonCard key={llave} name={value.name} url={value.url} />
            ))

          }

          {
            dataPokemonF?.map((value, llave) => (

              <PokemonCardF key={llave} evolucion={value.evolucion} id={value.id_pokemon} image={value.imagen} nombre={value.nombre} tipo={value.tipo} />
            ))
          }
        </div>
      </Container>

    </>
  )
}

export default Home
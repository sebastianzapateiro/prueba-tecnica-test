import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getDate } from '../helpers/CRUD';
import '../../src/style.css'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../style.css'


export function PokemonCard(props) {

    const [pokemon, setPokemon] = useState([]);
    const [pokemonEvolution, setPokemonEvolution] = useState([]);
    const [pokemonTigger, setPokemonTigger] = useState('');
    useEffect(() => {

        async function getData() {
            try {
                const data = await getDate('pokemon', '0', props.name);
                setPokemon(data);

            } catch (e) {

            }
        }

        getData();

    }, [props])

    const { id, types } = pokemon;

    useEffect(() => {

        async function getData() {
            try {
                const datae = await getDate('pokemon-species', '0', props.name);
                setPokemonTigger(datae.evolution_chain.url)


            } catch (e) {

            }
        }

        getData();

    }, [props])

    useEffect(() => {

        async function getData() {
            try {

                const datat = await getDate(pokemonTigger, '-1');

                setPokemonEvolution(datat)


            } catch (e) {

            }
        }

        getData();

    }, [props, pokemon])


    return (
        <>


            <Card style={{ width: '16.3rem' }}>
                <Card.Img className='img-pokemon p-2' variant="top" src={pokemon.sprites?.other.dream_world.front_default} />
                <Card.Body>
                    <Card.Title className='name-pokemon'>{props.name}</Card.Title>
                    <Card.Text>


                        <p><span>Id: </span>{id}</p>
                        <p>Evoluciones: {pokemonEvolution?.chain?.evolves_to[0]?.species?.name}  {pokemonEvolution?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name}</p>
                        <div className='tipo-pokemon'>
                            
                            {pokemon.types?.map((tipo, llave) => (
                                <div className='tipo-p'>
                                    <img src={`/src/assets/icons-types/${tipo.type.name}.svg`} ></img>
                                    <span key={llave} >{tipo.type.name}&nbsp;</span>
                                </div>
                            ))
                            }
                        </div>

                    </Card.Text>
                    

                </Card.Body>
            </Card>
        </>
    )
}


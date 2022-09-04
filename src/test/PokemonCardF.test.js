import { render, screen } from '@testing-library/react';
import { PokemonCardF } from '../components/PokemonCardF';




describe('Prueba de componenete PokemonCard', () => {

    const nombre = "ivysaur"
    const url1 = "https://pokeapi.co/api/v2/pokemon/2/"

    render(<PokemonCardF evolucion={"s"} id={"value.id_pokemon"} image={"value.imagen"} nombre={"value.nombre"} tipo={"value.tipo"} />);
  
    test('Test para validar la obtención de datos API para tarjeta pokemon', () => {
        const evolucion = screen.getAllByText("value.nombre");
        expect(evolucion).toBeInTheDocument;


    })
})
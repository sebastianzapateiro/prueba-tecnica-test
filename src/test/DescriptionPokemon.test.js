import { render, screen } from '@testing-library/react';
import {DescriptionPokemon} from '../components/DescriptionPokemon';




describe('Prueba de componenete DescriptionPokemon', () => {


    render(<DescriptionPokemon />);
  
    test('Test para validar el componente de DeacriptionPokemon', () => {
        const valor = screen.getAllByText("Grupo de huevos:");
        expect(valor).toBeInTheDocument;


    })
})
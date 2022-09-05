import { render, screen } from '@testing-library/react';
import { DescriptionPokemonF} from '../components/DescriptionPokemonF';




describe('Prueba de componenete DescriptionPokemonF', () => {

    render(<DescriptionPokemonF/>);
  
    test('Test para validar DescriptionPokemonF', () => {
        const valor = screen.getAllByText("Grupo de huevos:");
        expect(valor).toBeInTheDocument;


    })
})
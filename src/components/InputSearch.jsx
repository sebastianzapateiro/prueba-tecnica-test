import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function InputSearch() {
    return (
        <InputGroup className="my-4">
            <Form.Control aria-label="Text input with dropdown button" placeholder='Search by filter' />

            <DropdownButton
                variant="outline-secondary"
                title="Origin"
                id="input-group-dropdown-2"
                align="end"
            >
                <Dropdown.Item href="#">Pokemon API</Dropdown.Item>
                <Dropdown.Item href="#">Firestore</Dropdown.Item>
            </DropdownButton>
        </InputGroup>
    )
}

export default InputSearch
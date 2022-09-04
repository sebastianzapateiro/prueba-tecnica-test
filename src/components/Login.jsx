import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../Hooks/useForm';
import { actionLoginAsync, loginGoogle } from '../redux/actions/actionLogin';
import facebook_icon from '../assets/facebook.gif'
import google_icon from '../assets/google.png'


const Login = () => {
    const dispatch = useDispatch()

    const [formValue, handleInputChange, reset] = useForm({
        email: '',
        pass: '',

    })

    const { email, pass } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(useForm)
        dispatch(actionLoginAsync(email, pass))
        reset()
    }

    return (
        <div style={{ margin: '15%', marginLeft: '30%', marginRight: '30%' }}>
            <Form onSubmit={handleSubmit}>
                <h1 className='text-center mb-5'>Iniciar Sesion</h1>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo electronico </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={formValue.email} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="pass" value={formValue.pass} onChange={handleInputChange} />
                </Form.Group>


                <Button type="submit" className='w-100 my-3' variant="info">
                    Login
                </Button>


                <div className="d-flex justify-content-center align-items-center">

                    <Button type="submit" style={{ background: "none", border: "none" }} onClick={() => dispatch(loginGoogle())} >
                        <Image style={{ width: "50px" }} src={google_icon} alt="" />
                    </Button>

                    <Button type="submit" variant="outline-info" style={{ background: "none", border: "none" }}>
                        <Image style={{ width: "50px" }} src={facebook_icon} alt="" />
                    </Button>
                    <Link to="/register"><Button type="submit" variant="info"  >
                        Registrase
                    </Button></Link>
                </div>

            </Form>
        </div>
    );
};

export default Login;
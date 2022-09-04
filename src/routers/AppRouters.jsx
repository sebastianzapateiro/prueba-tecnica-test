import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DescriptionPokemon from '../components/DescriptionPokemon'
import DescriptionPoemon from '../components/DescriptionPokemon'
import DescriptionPokemonF from '../components/DescriptionPokemonF'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import Login from '../components/Login';
import Register from '../components/Register';
import AgregarPokemon from '../components/AgregarPokemon';
import EditarPokemon from '../components/EditarPokemon';


function AppRouters() {
  const [cheking, setCheking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        /* console.log(user) */
        setIsLoggedIn(true)

        user.getIdToken()
          /* .then((token) => { console.log('el token es: ', token) }) */
      }
      else {
        setIsLoggedIn(false)
      }
      setCheking(false)
    })
  }, [setIsLoggedIn, setCheking])

  if (cheking) {
    return (
      <h1>Espere....</h1>

    )
  }


  return (

    <BrowserRouter>

      <Routes>

      <Route path="/" element={
          <PublicRouter isAutentication={isLoggedIn}>
            <Login />
          </PublicRouter>

        } />

        <Route path="/login" element={
          <PublicRouter isAutentication={isLoggedIn}>
            <Login />
          </PublicRouter>

        } />

        <Route path="/register" element={
          <PublicRouter isAutentication={isLoggedIn}>
            <Register />
          </PublicRouter>

        } />

        <Route path="/pokemon-a/:name" element={
          <PrivateRouter isAutentication={isLoggedIn}>
            <DescriptionPokemon />
          </PrivateRouter>
        } />

<Route path="/add-pokemon" element={
          <PrivateRouter isAutentication={isLoggedIn}>
            <AgregarPokemon />
          </PrivateRouter>
        } />

<Route path="/edit-pokemon/:id" element={
          <PrivateRouter isAutentication={isLoggedIn}>
            <EditarPokemon />
          </PrivateRouter>
        } />



<Route path="/home" element={
          <PrivateRouter isAutentication={isLoggedIn}>
            <Home/>
          </PrivateRouter>
        } />
        <Route path="/pokemon-f/:name" element={
          <PrivateRouter isAutentication={isLoggedIn}>
            <DescriptionPokemonF />
          </PrivateRouter>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters
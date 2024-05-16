import React from 'react'
import { NavBar } from '../components/NavBar'
import { InfoPlanView } from './InfoPlanView'
import 'flowbite';

export const HomePage = () => {
  return (
    <>
    <NavBar></NavBar>
    <InfoPlanView></InfoPlanView>
    </>
  )
}

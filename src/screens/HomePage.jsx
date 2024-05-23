import React from 'react'
import { NavBar } from '../components/NavBar'
import { InfoPlanView } from './InfoPlanView'
import 'flowbite';
import { NavBarVertical } from '../components/NavBarVertical';
import { PlanView } from './PlanView';

export const HomePage = () => {
  return (
    <>
    <NavBarVertical></NavBarVertical>
    <PlanView></PlanView>
    </>
  )
}

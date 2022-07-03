import React, { Fragment } from 'react'
import { Navbar } from 'react-daisyui'
import { CustomNavbar } from '../custom-nav/CustomNavbar'

export const Home = () => {
  return (
    <Fragment>
    <CustomNavbar />
    <div>Hello, World!</div>
    </Fragment>
  )
}

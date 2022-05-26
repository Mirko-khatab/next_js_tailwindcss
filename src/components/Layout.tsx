import Head from 'next/head';
import React, { FC } from 'react'
import Nav from './Nav';

type Type =React.FC<{
    children :any ;
}>

const Layout:Type = ({children}) => {
  return (
    <>
     <Head>
        <title>Todoist | A To-Do List to Organize Your Work & Life</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/img/Logo.ico" />
      </Head>
    <div>
{children}
    </div>
      
    </>
  )
}

export default Layout

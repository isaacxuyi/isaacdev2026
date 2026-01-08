import React from 'react'
import Header from '../Hero Section/Header/page'
import Statementxpic from '../componets/StatementsxPic/page' 
import Footer from '../components/Footer/page'
import Memberships from '../componets/Memberships/page'
import Experience from '../componets/Experience/page'
import Education from '../componets/Education/page'
import Skills from '../componets/Skills/page'
import Hobbies from '../componets/Hobbies/page'

const page = () => {
  return (
    <div>
        <Header finishedLoading={true} /> 
        <Statementxpic/> 
        <Memberships/>
        <Experience/>
        <Education/>
        <Skills/>
        <Hobbies/>
        <Footer/>
    </div>
  )
}

export default page
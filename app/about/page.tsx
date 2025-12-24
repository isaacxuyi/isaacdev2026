import React from 'react'
import Header from '../Hero Section/Header/page'
// 1. Ensure "components" is spelled correctly 
// 2. Match the component name casing to the usage below
import Statementxpic from '../componets/StatementsxPic/page' 
import Footer from '../componets/Footer/page'
import Memberships from '../componets/Memberships/page'
import Experience from '../componets/Experience/page'
import Education from '../componets/Education/page'
import Skills from '../componets/Skills/page'
import Hobbies from '../componets/Hobbies/page'

const page = () => {
  return (
    <div>
        <Header finishedLoading={true} /> 
        {/* This must match the name in the "import" line exactly */}
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
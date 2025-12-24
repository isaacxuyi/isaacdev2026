// ... your other imports
import Header from '../Hero Section/Header/page'

const page = () => {
  return (
    <div>
        {/* Add the missing prop here */}
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
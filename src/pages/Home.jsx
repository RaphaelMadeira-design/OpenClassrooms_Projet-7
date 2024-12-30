import Banner from '../components/Banner/Banner'
import ApartmentList from '../components/ApartmentList/ApartmentList'
import '../components/Css/style.css'
import bgImage from '../assets/bg1.jpg'

function Home() {
  return (
    <>
      <Banner 
        backgroundImage={bgImage} 
        showText={true} 
      />
      <ApartmentList />
    </>
  )
}

export default Home
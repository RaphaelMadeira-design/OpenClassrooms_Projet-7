import Wrapper from '../components/Wrapper/Wrapper'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import ApartmentList from '../components/ApartmentList/ApartmentList'
import Footer from '../components/Footer/Footer'
import '../components/Reset/Reset.css'

function Home() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Banner />
        <ApartmentList />
      </Wrapper>
        <Footer />
    </>
  )
}

export default Home
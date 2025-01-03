import React from 'react'
import { useParams } from 'react-router'
import '../../components/Css/style.css'
import apartments from '../../data/logements.json'
import Carousel from './Carousel/Carousel'
import Collapse from '.././Collapse/Collapse'
import Host from './Host/Host'
import Tags from './Tags/Tags'
import Rating from './Rating/Rating'
import Error from '../../pages/Error'

function ApartmentDetails() {
    const { rentalId } = useParams()
    const apartment = apartments.find((apt) => apt.id === rentalId)

    if (!apartment) {
        return <Error/>
    }

    return (
        <div className="details-container">
            <Carousel pictures={apartment.pictures}/>
            <div className='apartmentDetails'>
                <div className='apartmentDetails__NameLocationTags'>
                    <h2>{apartment.title}</h2>
                    <h3>{apartment.location}</h3>
                    <Tags tags={apartment.tags} />
                </div>
                <div className='apartmentDetails__HostRating'>
                    <Host name={apartment.host.name} picture={apartment.host.picture} />
                    <Rating rating={apartment.rating}/>
                </div>
            </div>
                <div className='apartmentCollapse'>
                <Collapse title="Description">
                    {apartment.description}
                </Collapse>
                <Collapse title="Équipements">
                    {apartment.equipments.map((equip, index) => (
                        <li key={index}>{equip}</li>
                    ))}
                </Collapse>
            </div>
        </div>
    )
}

export default ApartmentDetails
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import '../../components/Css/style.css'
import apartments from '../../data/logements.json'
import Carousel from '../../components/ApartmentDetails/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse'
import Host from '../../components/ApartmentDetails/Host/Host'
import Tags from '../../components/ApartmentDetails/Tags/Tags'
import Rating from '../../components/ApartmentDetails/Rating/Rating'

function ApartmentDetails() {
    const { rentalId } = useParams()
    const navigate = useNavigate()
    const apartment = apartments.find((apt) => apt.id === rentalId)

    useEffect(() => {
        if (!apartment) {
            navigate('/*')
        }
    }, [apartment, navigate])

    if (!apartment) {
        return null
    }

    return (
        <div className="details-container">
            <Carousel pictures={apartment.pictures} title={apartment.title}/>
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
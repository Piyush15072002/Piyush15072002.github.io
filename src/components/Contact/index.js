import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index.js'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import marker from '../../assets/images/marker.svg';
import { Icon } from 'leaflet'

const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32]
})


const Contact = () => {

    const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_g9yh7gk',
            'template_oqgvb3g',
            refForm.current,
            'I3wDWo4x8QB_aRp2e'
        )
            .then(
                (result) => {
                    alert('Message sent successfully: Thank you so much for your message!')
                    window.location.reload(false)

                },
                (error) => {
                    alert("Failed to send the message, Please try again!")

                }
            );
    }


    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className="container contact-page">

                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={contactArray} index={15} />
                    </h1>

                    <p>
                        Please feel free to reach out to me for any Job offers, project collaboration, or any other help.

                    </p>
                    <p>
                        I will be replying your query ASAP so don't worry, just drop a message. Arigato!
                    </p>

                    <div className="contact-form">

                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <div className="group">
                                    <li >
                                        <input type="text" name="name" placeholder='Name' required />
                                    </li>
                                    <li >
                                        <input type="email" name="email" placeholder='email@gmail.com' required />
                                    </li>
                                </div>
                                <li className="subject">
                                    <input placeholder="Subject" type="text" name="subject" />
                                </li>

                                <li className='textarea' >
                                    <textarea name="message" placeholder='Here you go!' required cols="22" rows="3"></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>

                            </ul>
                        </form>

                    </div>

                </div>


                <div className="info-map">
                    Piyush Pant,
                    <br />
                    <FontAwesomeIcon icon={faLocation} alt="location" /> India
                    <br />
                    <span>
                        piyushpant15@gmail.com
                    </span>
                </div>


                <div className="map-wrap">

                    <MapContainer center={[19.0760, 72.8777]} zoom={4}>

                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        <Marker icon={myIcon} position={[19.0760, 72.8777]}>

                            <Popup> <b style={{ fontSize: "12px" }} >
                                Let's meet for a coffee! </b>
                            </Popup>

                        </Marker>

                    </MapContainer>



                </div>

            </div>


            <Loader type="pacman" />

        </>

    )

}

export default Contact
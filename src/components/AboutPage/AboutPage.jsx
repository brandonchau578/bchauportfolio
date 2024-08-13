import React from 'react'
import './AboutPage.css'
import corgiImage from './Corgi.jpg'
function AboutPage() {
  return (
    <div className="aboutPageContainer">
        <div className = "aboutMeContainer">
            <h1> I'm Brandon! I am a full stack engineer based in Los Angeles and Irvine, California</h1>
            <div className = "profilePictureContainer">
                <img className="profilePicture" src={corgiImage} alt="Brandon Chau Profile Picture" />
            </div>
            <h2> a bit about me</h2>
            <p></p>
        </div>
        <div className = "workExperience">

        </div>
    </div>
  )
}

export default AboutPage
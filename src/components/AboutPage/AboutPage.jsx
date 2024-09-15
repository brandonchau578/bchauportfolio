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
            <p>I am currently a Masters Student at CSUF majoring in Software Engineering, as well as a graduate of the University of California, Irvine, with B.A in Environmental Science. 
            I switched from Environmental Science to Software Engineering because I saw how technology could make a big difference in solving problems. While studying Environmental Science, I got interested in finding solutions for environmental issues. But I realized that using software could help solve these problems more effectively and reach more people. By moving to Software Engineering, I wanted to use my problem-solving skills along with technology to create tools that could help protect the environment and make a positive impact.</p>
            <p>In my previous roles, I designed and engineered websites for non-proft organizations and passion-driven startups. At SureAttend, I worked on a mix of both front end development and responsive web interfaces. I played a key role in creating an interactive dashboard, and landing page to help create incentivess for workers to attend meetings. Before that, I helped with the development of a company website for Dreams for Schools, a non-proft that helps STEM to students in summer programs. </p>
            <p>I excel at turning complex challenges into streamlined, effective solutions. I am passionate about crafting user-centric designs, ensuring that each project not only meets technical requirements but also delivers a seamless, visually appealing experience for the end-user.</p>
        </div>
        <div className = "workExperienceSection">
          <div className="workExperienceContainer">
            <div className = "workExperience">
              
            </div>

          </div>  
        </div>
    </div>
  )
}

export default AboutPage
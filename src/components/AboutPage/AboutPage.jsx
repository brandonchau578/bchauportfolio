import React from 'react'
import './AboutPage.css'
import corgiImage from './Corgi.jpg'
import DreamsForSchoolsImage from './DreamsForSchools.png'
import sureAttendImage from './SureAttend.png'
function AboutPage() {
  return (
    <div className="aboutPageContainer">
        <div className = "aboutMeContainer">
            <h1> i'm Brandon! I am a full stack engineer based in Los Angeles and Irvine, California</h1>
            <div className = "profilePictureContainer">
                <img className="profilePicture" src={corgiImage} alt="Brandon Chau Profile Picture" />
            </div>
            <h2> a bit about me</h2>
            <p>I am currently a Masters Student at CSUF majoring in Software Engineering, as well as a graduate of the University of California, Irvine, with B.A in Environmental Science. 
            I switched from Environmental Science to Software Engineering because I wanted to pursue a career with constant growth in solving problems. While studying Environmental Science, I got interested in finding solutions for environmental issues. But I realized that using software could help solve these problems more effectively and reach more people. By moving to Software Engineering, I wanted to use my problem-solving skills along with technology to create tools that could help protect the environment and make a positive impact.</p>
            <p>In my previous roles, I designed and engineered websites for non-proft organizations and passion-driven startups. At American Dog Society, I worked on a mix of both front end development and responsive web interfaces. I played a key role in creating an interactive dashboard, and landing page to help create incentivess for workers to attend meetings. Before that, I helped with the development of a company website for Dreams for Schools, a non-proft that helps STEM to students in summer programs. </p>
            <p>I excel at turning complex challenges into streamlined, effective solutions. I am passionate about crafting user-centric designs, ensuring that each project not only meets technical requirements but also delivers a seamless, visually appealing experience for the end-user.</p>
        </div>
        <div className = "workExperienceSection">
          <div className="workExperienceContainer">
            <h1 className="workExperienceTitle"> My Tech Journey</h1>
            <div className = "workExperience">
              <div>
                <h1 className = "gradientText">American Dog Society</h1>
                <h2 className = "gradientText">July 2024 - Present</h2>
                <p>During my time as a Front-End Engineer at American Dog Society, I worked on important projects that helped improve the organization’s website. One of my main tasks was to create the landing page using React.js, where I aimed to design a user-friendly interface that clearly showed what the organization is all about and the services they offer. I made sure the landing page looked good on all devices by using responsive design techniques, which made it easier for people to use.</p>
                <p>Additionally, I used TypeScript to enhance the code’s reliability and readability. I also collaborated with back-end developers to connect the landing page to a MongoDB database through an API, which helped make data retrieval faster and the website more efficient.</p>
              </div>
              <img className = "workExperienceImage" src = {sureAttendImage}/>
            </div>
            <div className = "workExperience">
              <div>
                <h1 className = "gradientText">Dreams For Schools</h1>
                <h2 className = "gradientText">August 2023 - August 2024</h2>
                <p> During my time as a Web Developer Intern at Dreams for Schools, I got to work on important projects and also had the chance to teach students how to code, which was really fulfilling. I helped build and maintain websites that supported the organization’s programs, while also guiding students as they learned to code. </p>
                <p> I worked with a team of developers and designers, learning a lot about using HTML, CSS, and JavaScript for building websites. This experience also taught me how to work with others, meet deadlines, and communicate clearly. My internship not only improved my coding skills but also showed me how technology can help in education and how rewarding it is to teach others. </p>
              </div>
              <img className = "workExperienceImage" src = {DreamsForSchoolsImage}/>
            </div>
            
            <div className = "workExperience">
              <h1 className = "gradientText">UCI ZotForce</h1>
              <p>During my time as a Front-End Engineer at American Dog Society, I worked on important projects that helped improve the organization’s website. One of my main tasks was to create the landing page using React.js, where I aimed to design a user-friendly interface that clearly showed what the organization is all about and the services they offer. I made sure the landing page looked good on all devices by using responsive design techniques, which made it easier for people to use.</p>
              <p>Additionally, I used TypeScript to enhance the code’s reliability and readability. I also collaborated with back-end developers to connect the landing page to a MongoDB database through an API, which helped make data retrieval faster and the website more efficient.</p>
              <img className = "workExperienceImage" src = {DreamsForSchoolsImage}/>
            </div>


          </div>  
        </div>
    </div>
  )
}

export default AboutPage
import React from 'react'
import './HomePage.css'
const HomePage = () =>{
  return (
    <div className = "introContainer">
        <div className = "introductionParagraph">
            <h1 className="introContent">welcome, i'm brandon!</h1>
            <h2 className="introContent">i'm a front-end engineer committed to crafting innovative and user-centric web experiences by seamlessly blending creativity with technical expertise</h2>
            <p className="introContent"> </p>
        </div>
        <div className ="projectSection projectSectionOne">
            <div className ="projectLeftContainer">
                <h1> EcoTecture: A Real Estate Environmental Scoring Application</h1>
                <div className="skillsList">
                    <li className="skills"><a>HTML</a></li>
                    <li className="skills"><a>CSS</a></li>
                    <li className="skills"><a>JavaScript</a></li>
                    <li className="skills"><a>React.js</a></li>
                    <li className="skills"><a>Python</a></li>
                    <li className="skills"><a>TensorFlow</a></li>
                    <li className="skills"><a>ArcGIS</a></li>
                    <li className="skills"><a>BootStrap</a></li>
                    <button className="readMore"><a>READ MORE</a></button>
                    <p className="projectSummary">The main goals of this project was to create an environmental scoring system, add this scoring feature to a real estate app, make the app easy to use, and support sustainable living. The scoring system will look at different environmental factors and give each property a reliable score.</p>
                    <p className="projectSummary">By putting this feature into a real estate app, users will get clear and simple scores and details about the environmental factors around each property. This transparency will help users think about the environmental impact when choosing a property, promoting more sustainable living choices.</p>

                </div>
            </div>
            <div className="projectRightContainer">
                l;ajf;sdalkjfdsal;fkasd;j
            </div>
        </div>
        <div className="projectSection projectSectionTwo">
            <div className = "projectLeftContainer">
                <h1>Personalized Fitness Coach ML/AI</h1>
                <div className = "skillsList">
                    <li className ="skills"><a>HTML</a></li>
                    <li className ="skills"><a>CSS</a></li>
                    <li className="skills"><a>JavaScript</a></li>
                    <li className ="skills"><a>React.js</a></li>
                    <li className ="skills"><a>Python</a></li>
                    <li className ="skills"><a>PyTorch</a></li>
                    <li className ="skills"><a>Flask</a></li>
                    <button className="readMore"><a>READ MORE</a></button>
                    <p></p>
                </div>
            </div>
            <div className = "projectRightContainer">

            </div>
        </div>
        <div className="projectSection projectSectionThree">
            <div className = "projectLeftContainer">
                    <h1>Love Letters Card Game</h1>
                    <div className = "skillsList">
                        <li className ="skills"><a>HTML</a></li>
                        <li className ="skills"><a>CSS</a></li>
                        <li className="skills"><a>JavaScript</a></li>
                        <li className ="skills"><a>React.js</a></li>
                        <button className="readMore"><a>READ MORE</a></button>
                        <p></p>
                    </div>
            </div>
            <div className = "projectRightContainer">

            </div>
        </div>
        <div className="projectSection projectSectionFour">
            <div className = "projectLeftContainer">
                <h1>Las Vegas Weekend Itinerary Planner/Bingo</h1>
                <div className = "skillsList">
                    <li className ="skills"><a>HTML</a></li>
                    <li className ="skills"><a>CSS</a></li>
                    <li className="skills"><a>JavaScript</a></li>
                    <li className ="skills"><a>Vue.js</a></li>
                    <button className="readMore"><a>READ MORE</a></button>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage
import React, { useEffect, useState, useRef } from 'react'
import './HomePage.css'
import brandonPhoto from './Photos/brandon.jpg';
import Navbar from '../Layout/Navbar';
const HomePage = () => {
  const [activeTab, setActiveTab] = useState('NETL');
  const [contentVisible, setContentVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef(null);
  const tabRefs = useRef({});
  
  const experiences = {
    'NETL': {
      title: 'National Energy Technology Laboratory',
      role: 'ML Research Engineer Intern',
      period: 'May 2025 - Present',
      descriptionBullets: [
        '● Led integration of LLM-powered search tools into internal research platforms, enabling real-time search over 1M+ documents and improving researcher productivity by 35%. ',
        '● Built and fine-tuned transformer-based LLMs using PyTorch and Hugging Face Transformers, enabling automated extraction of materials properties and reducing manual review time by 50% for R&D teams.',
        '● Processed and cleaned over 2M experimental records using Pandas, creating structured datasets that accelerated model training and reduced data preprocessing time by 70%. ',
      ],      
      skills: ['Python', 'TensorFlow', 'Data Analysis', 'Research']
    },
    'Develop For Good': {
      title: 'Develop For Good',
      role: 'Software Development Engineer',
      period: 'Nov 2024 - Feb 2025',
      descriptionBullets: [
        '● Enhanced web page functionality by adding a feature that analyzes the reading level of content on a webpage by using JavaScript and MongoDB, which resulted in a 15% improvement in user engagement for educational content.',
        '● Ensured software reliability by developing and executing Jest unit tests for reading level features, achieving 95% code coverage and reducing post-deployment bugs by 30%.',
        '● Streamlined content adjustments by implementing a dynamic readability indicator, enabling users to optimize their content, which led to a 30% decrease in time spent revising drafts.'
      ],
      skills: ['React', 'JavaScript', 'UI/UX Design', 'Project Management']
    },
    'SureAttend': {
      title: 'SureAttend',
      role: 'Front-end Software Engineer Intern',
      period: 'Jul 2024 - Nov 2024',
      descriptionBullets: [
        '● Constructed new landing-page functionality using Python and Django, integrating REST APIs with asynchronous functions to enable real-time updates and seamless user interactions, resulting in a 40% improvement in checkout speed and a significantly more fluid user experience. ',
        '● Created a secure login system with user authentication and password hashing with email sign-in through MySQL, successfully facilitating the creation and management of 50+ accounts. ',
        '● Collaborated in the software development lifecycle by planning, developing, testing, and deploying features with agile methodologies through sprint cycles, increasing team productivity by 25%.'
      ],
      skills: ['Full Stack Development', 'Database Design', 'API Integration']
    },
    'Dreams For Schools': {
      title: 'Dreams For Schools',
      role: 'Web Development Intern',
      period: 'Aug 2023 - Aug 2024',
      descriptionBullets: [
        '● Implemented hands-on coding exercises and projects to reinforce key concepts in HTML, CSS, JavaScript, and other web technologies, leading to a 25% improvement in student comprehension and skill mastery.',
        '● Revampedmobile and web interfaces using React Native and React.js, boosting user engagement by 10% through enhanced user experience.',
        '● Enhanced accessibility features following WCAG guidelines, improving accessibility score by 35%, making the application more inclusive for users with disabilities.'
      ],
      skills: ['Education', 'Curriculum Development', 'Mentorship']
    }
  };

  // Project data - replace with your actual project information
  const projectScreenshots = [
    {
      id: 1,
      title: 'EcoTecture',
      image: '/api/placeholder/800/400',
      description: 'A environmental health safety grading application.'
    },
    {
      id: 2,
      title: 'Las Vegas Planner',
      image: '/api/placeholder/800/400',
      description: 'An online planner that helps plan your trips to Las Vegas.'
    },
    {
      id: 3,
      title: 'On Tap',
      image: '/api/placeholder/800/400',
      description: 'Interactive coding learning platform'
    },
    {
      id: 4,
      title: 'Data Visualization Tool',
      image: '/api/placeholder/800/400',
      description: 'Advanced analytics dashboard'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Algorithim Visualizer',
      description: 'An interactive web application that helps users understand algorithms through beautiful visual animations and step-by-step demonstrations.',
      githubUrl: 'https://github.com/brandonchau578/AlgorithmVisualizer'
    },
    {
      id: 2,
      title: 'Realm Roster',
      description: 'Realm Roster is a web app that lets users create, manage, and view fantasy-themed character profiles like species, class, and name for a collaborative MMO-style guild roster.',
      githubUrl: 'https://github.com/brandonchau578/RealmRoster'
    },
    {
      id: 3,
      title: 'On Tap',
      description: 'On Tap is a mobile app that helps users discover, track, and rate local craft beers and breweries nearby.',
      githubUrl: 'https://github.com/brandonchau578/OnTap'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with payment integration and inventory management.',
      githubUrl: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with file sharing and group messaging capabilities.',
      githubUrl: 'https://github.com/yourusername/chat-app'
    },
    {
      id: 6,
      title: 'Machine Learning Toolkit',
      description: 'Python toolkit for data preprocessing and model evaluation in machine learning projects.',
      githubUrl: 'https://github.com/yourusername/ml-toolkit'
    }
  ];

  useEffect(() => {
    // Handle the experience section animation
    const experienceSection = document.getElementById('experienceSection');
    
    if (experienceSection) {
      experienceSection.classList.add('fade-in-section');
    }
    
    // Select all fade-in sections
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay * 150); // 150ms delay between each item
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    // Observe elements
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    // Cleanup
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [isTransitioning, projectScreenshots.length]);
  
  // Handle tab change animations
  useEffect(() => {
    if (contentRef.current) {
      // Hide content first
      setContentVisible(false);
      
      // After a short delay, make content visible again
      const timer = setTimeout(() => {
        setContentVisible(true);
      }, 300); // Short delay for better UX
      
      return () => clearTimeout(timer);
    }
  }, [activeTab]);
  
  // Simplified handler for tab clicks
  const handleTabClick = (e, key) => {
    // Don't do anything if we're already on this tab
    if (key === activeTab) {
      return;
    }
    
    // Get the clicked element
    const element = e.currentTarget;
    
    // Get click position relative to the button
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate the required size to cover the entire button
    // Find the maximum distance from the click point to any corner
    const topLeft = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const topRight = Math.sqrt(Math.pow(rect.width - x, 2) + Math.pow(y, 2));
    const bottomLeft = Math.sqrt(Math.pow(x, 2) + Math.pow(rect.height - y, 2));
    const bottomRight = Math.sqrt(Math.pow(rect.width - x, 2) + Math.pow(rect.height - y, 2));
    
    // Take the maximum distance and multiply by 2 to ensure full coverage
    const size = Math.max(topLeft, topRight, bottomLeft, bottomRight) * 2;
    
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Position the ripple at the click position
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    // Set the size for the animation
    element.style.setProperty('--ripple-size', `${size}px`);
    
    // Apply the animation
    ripple.style.animation = 'full-button-ripple 0.8s ease-out forwards';
    
    // Add ripple to button
    element.appendChild(ripple);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 800); // Match animation duration
    
    // Handle tab activation
    document.querySelectorAll('.experience-tab').forEach(tab => {
      tab.classList.remove('clicked');
    });
    
    element.classList.add('clicked');
    setActiveTab(key);
    
    setTimeout(() => {
      element.classList.remove('clicked');
    }, 500);
  };

  // Enhanced carousel navigation functions with transition handling
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => 
      prevSlide === projectScreenshots.length - 1 ? 0 : prevSlide + 1
    );
    setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? projectScreenshots.length - 1 : prevSlide - 1
    );
    setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
  };
  
  // Function to render description content based on active tab
  const renderDescription = () => {
    const experience = experiences[activeTab];
    
    // Check if experience has bullet points
    if (experience.descriptionBullets) {
      return (
        <div className="experience-description">
          {experience.descriptionBullets.map((bullet, index) => (
            <p key={index} className="description-bullet">{bullet}</p>
          ))}
        </div>
      );
    }
    
    // Render regular description
    return (
      <div className="experience-description">
        <p>{experience.description}</p>
      </div>
    );
  };
  
  return (
    <div>
      <Navbar />
      <div className="introContainer fade-in-section">
        <div className="introductionParagraph">
          <div className="introContent">
            <span className='introTitle'>
              hi,  
              <span className="introName"> brandon </span>
              here. 
            </span>
            <span className="cursorBlinking">|</span>
          </div>
          <h2 className="introContent">I create cool things here and there</h2>
          <p className="introContent">I'm a research engineer intern from Irvine, California. I'm fascinated by large-scale, high impact products and hoping to contribute to major feature launches in industry-leading services.</p>
        </div>
      </div>
      
      <div id="experienceSection" className="fade-in-section ">
        <div className="section-header" id ="About">
          <span className="section-title">/ about me</span>
        </div>
        
        {/* New flex container for side-by-side layout */}
        <div className="aboutContentWrapper">
          {/* Left side: Text content */}
          <div className="aboutDescription">
            <p>I am currently a <b>Machine Learning Research Engineer Intern</b> at, <a href="https://netl.doe.gov/">National Energy Technology Laboratory</a>, working in the research sector under material science. At the same time, I am undertaking a part-time Master's of Science in Software Engineering at California State University, Fullerton.</p>
            <p>Here are some technologies I have been working with:</p>
            <div className="techStackContainer">
              <div className="techStackGrid">
                <div className="techItem fade-in-section" data-delay="0">
                  <span>JavaScript</span>
                </div>
                <div className="techItem fade-in-section" data-delay="1">
                  <span>React.js</span>
                </div>
                <div className="techItem fade-in-section" data-delay="2">
                  <span>Python</span>
                </div>
                <div className="techItem fade-in-section" data-delay="3">
                  <span>SparQL</span>
                </div>
                <div className="techItem fade-in-section" data-delay="4">
                  <span>C++</span>
                </div>
                <div className="techItem fade-in-section" data-delay="5">
                  <span>C#</span>
                </div>
              </div>
              <p>Outside of work, I'm interested in following the developments of new technology. I also play a lot of video/board/card games. And I love cooking.</p>
            </div>
          </div>
          
          {/* Right side: Image */}
          <div className="aboutImageContainer"> 
            <img className="aboutImage" alt="Brandon Chau" src={brandonPhoto} />
          </div>
        </div>
        
        {/* Experience Section with Vertical Tabs and Right-Side Indicator */}
        <div className="experienceSection">
          <div className='fade-in-section'>
            <div className="section-header" id ="Experience">
              <span className="section-title">/ experience</span>
            </div>
            
            <div className="experience-content-wrapper">
              {/* Tab Container with Right-Side Indicator */}
              <div className="experience-tabs-container">
                {/* Vertical Tabs */}
                <div className="experience-tabs">
                  {Object.keys(experiences).map((key) => (
                    <div 
                      key={key}
                      ref={el => tabRefs.current[key] = el}
                      className={`experience-tab ${activeTab === key ? 'active-tab' : ''}`}
                      onClick={(e) => handleTabClick(e, key)}
                    >
                      <span>{key}</span>
                    </div>
                  ))}
                </div>
                
                {/* Vertical Indicator Line - Now on the right */}
                <div 
                  className="tab-indicator" 
                  style={{
                    height: tabRefs.current[activeTab] ? tabRefs.current[activeTab].offsetHeight : 0,
                    transform: tabRefs.current[activeTab] 
                      ? `translateY(${tabRefs.current[activeTab].offsetTop}px)` 
                      : 'translateY(0)'
                  }}
                />
              </div>
              
              {/* Content Area */}
              <div className="experience-content">
                <div 
                  ref={contentRef}
                  className={`experience-details ${contentVisible ? 'content-visible' : ''}`}
                >
                  <h3 className="experience-role">
                    {experiences[activeTab].role} <span className="at-symbol">@</span> <span className="company-name">{experiences[activeTab].title}</span>
                  </h3>
                  <p className="experience-period">{experiences[activeTab].period}</p>
                  
                  {/* Use renderDescription function */}
                  {renderDescription()}
                  
                  <div className="experience-skills">
                    <h4>Skills</h4>
                    <div className="skills-container">
                      {experiences[activeTab].skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="projectsSection fade-in-section">
          <div className="section-header" id ="Projects">
            <span className="section-title">/ projects</span>
          </div>
          
          {/* Project Screenshots Carousel */}
          <div className="carousel-container fade-in-section">
            <div className="carousel-wrapper">
              <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                &#8249;
              </button>
              
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projectScreenshots.map((screenshot, index) => (
                  <div 
                    key={screenshot.id}
                    className="carousel-slide"
                  >
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="carousel-image"
                    />
                    <div className="carousel-caption">
                      <h3>{screenshot.title}</h3>
                      <p>{screenshot.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                &#8250;
              </button>
            </div>
            
            {/* Carousel Indicators - Now as lines */}
            <div className="carousel-indicators">
              {projectScreenshots.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-line ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Project Grid with staggered fade-in */}
          <div className="projects-grid fade-in-section">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card fade-in-section"
              >
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-btn"
                  title="View on GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <footer style={{ textAlign: 'center', color: '#666', marginTop: '10rem', fontSize:'8px', }}>
            <p>Built and designed by Brandon Chau.</p>
            <p> All rights reserved. ©</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
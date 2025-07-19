import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './SwipeableProjectCards.css' 

const SwipeableProjectCards = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Landing Page for BrandLift Marketing Agency",
      description: "Designed and developed a responsive, high-converting landing page for a client’s marketing agency using React and Tailwind CSS. Integrated Formspree to handle form submissions and securely capture user information. Deployed the project seamlessly with Netlify, ensuring fast performance and continuous deployment. Focused on clean UI/UX to maximize lead generation and conversion rates.",
      tech: ["React", "TailwindCSS", "Netlify", "FormSpree Integration"],
      image: "/chefcowai.png", 
      demo: "https://brandliftmarketing.netlify.app/"
    },
    {
      id: 2,
      title: "VSL Landing Page AMZWinners Coaching Program",
      description: "Built a high-impact Video Sales Letter (VSL) landing page for a client’s Amazon coaching program using React and Tailwind CSS. Integrated Formspree to efficiently capture and manage user input. Deployed via Netlify for fast load times and reliable hosting. Prioritized conversion-focused design and responsive layout to drive engagement and lead collection.",
      tech: ["React", "TailwindCSS", "Netlify", "FormSpree Integration"],
      image: "/reduceCarbon.png",
      demo: "https://amzwinners.netlify.app/"
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (direction === 'right' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="projects-section">
      <div className="cards-container">
        {/* Card Stack Visualization */}
        <div className="card-stack">
          {projects.map((project, index) => {
            const isVisible = Math.abs(index - currentIndex) <= 2
            const offset = index - currentIndex
            
            if (!isVisible) return null

            return (
              <motion.div
                key={project.id}
                className="project-card"
                style={{
                  zIndex: projects.length - Math.abs(offset),
                }}
                initial={{
                  scale: 1 - Math.abs(offset) * 0.1,
                  y: Math.abs(offset) * 20,
                  opacity: offset === 0 ? 1 : 0.7
                }}
                animate={{
                  scale: 1 - Math.abs(offset) * 0.1,
                  y: Math.abs(offset) * 20,
                  opacity: offset === 0 ? 1 : 0.7,
                  filter: offset === 0 ? 'blur(0px)' : 'blur(2px)'
                }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait" custom={offset}>
                  {offset === 0 && (
                    <motion.div
                      key={currentIndex}
                      custom={offset}
                      variants={cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)

                        if (swipe < -swipeConfidenceThreshold) {
                          handleSwipe('left')
                        } else if (swipe > swipeConfidenceThreshold) {
                          handleSwipe('right')
                        }
                      }}
                      className="active-card"
                    >
                      <SwipeProjectCard project={project} />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Static background cards */}
                {offset !== 0 && (
                  <div className="background-card">
                    <SwipeProjectCard project={project} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="navigation-controls">
          <button 
            onClick={() => handleSwipe('right')}
            disabled={currentIndex === 0}
            className="nav-button prev"
          >
            ←
          </button>
          <div className="card-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button 
            onClick={() => handleSwipe('left')}
            disabled={currentIndex === projects.length - 1}
            className="nav-button next"
          >
            →
          </button>
        </div>

        {/* Project Counter */}
        <div className="project-counter">
          {currentIndex + 1} of {projects.length}
        </div>
      </div>
    </section>
  )
}


const SwipeProjectCard = ({ project }) => {
  return (
    <div className="card-content">
      <div className="card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="card-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
            Website
          </a>
        </div>

      </div>
    </div>
  )
}

export default SwipeableProjectCards
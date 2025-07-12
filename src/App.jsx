import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Ecommerce from './components/Ecommerce'

import reduceCarbon from './assets/reducecarbon.png'
import chefCowAI from './assets/chefcowai.png'

function App() {
  return (
    <>
     <Hero/>
     <ProjectCard title="Chef Cow AI"
     description={`A responsive React web ap with TailwindCSS that integrates MistralAI’s language model to deliver real-time recipe recommendations based on user-input ingredients. 
      The application leverages React for dynamic UI rendering, custom state management for form handling, and the Hugging Face inference API for seamless AI integration. Deployed with Netlify.`}
      img={chefCowAI} 
      link="https://chefcowai.netlify.app/"/>
     <ProjectCard title="Reduce Carbon" 
     description={`A React-based web application that helps users visualize and reduce their carbon emissions based on travel routes. 
                    By integrating the Climatiq API, the app calculates CO₂ impact for different travel options, 
                    allowing users to compare and choose eco-friendlier alternatives. I also implemented geolocation features and interactive 
                    Google Maps to create an engaging and informative user experience.`}

      img={reduceCarbon}
      link={"https://github.com/jjamesliu"} />
     <Ecommerce />
    </>
  )
}

export default App

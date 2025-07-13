import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Ecommerce from './components/Ecommerce'

import reduceCarbon from '/reduceCarbon.png'
import chefCowAI from '/chefcowai.png'

function App() {
  return (
    <>
     <Hero/>
     <ProjectCard title="Chef Cow AI"
     description={`Built a responsive React web application using Vite and TailwindCSS, deployed via Netlify. 
      The app integrates MistralAI’s language model via Hugging Face’s inference API to generate real-time recipe suggestions based on user-inputted ingredients. 
      Implemented custom state management for efficient form handling and used React’s component-based architecture for dynamic UI rendering 
      and smooth user experience.`}
      img={chefCowAI} 
      link={"https://chefcowai.netlify.app/"}
      github_repo={"https://github.com/jjamesliu/ChefCowAI"}/>
     <ProjectCard title="Reduce Carbon" 
     description={`Developed a responsive React web application using Vite and TailwindCSS, deployed via Netlify. 
      The app integrates the Carbon Interface API to calculate users’ carbon emissions based on their selected transportation method 
      (e.g., car mileage or airport of departure). Leveraging the Meta LLaMA AI model, the app dynamically suggests personalized, 
      actionable strategies to help users reduce their carbon footprint. The UI guides users through selecting their travel type and inputting relevant data, 
      providing both educational insights and AI-generated recommendations in real time.`}

      img={reduceCarbon}
      link={"https://reduceco2.netlify.app/"}
      github_repo={"https://github.com/jjamesliu/reduceCO2"} />
     <Ecommerce />
    </>
  )
}

export default App

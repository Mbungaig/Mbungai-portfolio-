import React from 'react'
import './portfolio.css'
import Portfolio1 from "../../assets/portfolio1.jpg"
import Portfolio2 from "../../assets/portfolio2.jpg"
import Portfolio3 from "../../assets/portfolio3.jpg"
import Portfolio4 from "../../assets/portfolio4.jpg"
import Portfolio5 from "../../assets/portfolio5.jpg"
import Portfolio6 from "../../assets/portfolio6.jpg"

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21518870-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 2,
    image: Portfolio2,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21518922-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 3,
    image: Portfolio3,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21518866-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: Portfolio4,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21518917-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 5,
    image: Portfolio5,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21518912-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 6,
    image: Portfolio6,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21518827-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const portfolio = () => {
  return (
    <section id ="Portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return( 
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github}className='btn' target='blank'>Github </a>
          <a href={demo} className='btn btn-primary' target='blank'> live demo</a>
          </div>
        </article>
            )
            
          })
        
       }
      </div>
    </section>
  )
}

export default portfolio








/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio3} alt="" />
          </div>
          <h3>This is a portfolio item litle</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/'className='btn' target='blank'>Github </a>
          <a href='https://github.com/' className='btn btn-primary' target='blank'> live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio4} alt="" />
          </div>
          <h3>This is a portfolio item litle</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/'className='btn' target='blank'>Github </a>
          <a href='https://github.com/' className='btn btn-primary' target='blank'> live demo</a>
          </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio5} alt="" />
          </div>
          <h3>This is a portfolio item litle</h3>
        <div className="portfolio__item-cta"><a href='https://github.com/'className='btn' target='blank'>Github </a>
          <a href='https://github.com/' className='btn btn-primary' target='blank'> live demo</a>
        </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio6} alt="" />
          </div>
          <h3>This is a portfolio item litle</h3> 
          <div className="portfolio__item-cta"><a href='https://github.com/'className='btn' target='blank'>Github </a>
          <a href='https://github.com/' className='btn btn-primary' target='blank'> live demo</a>
            </div>
            </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item litle</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/'className='btn' target='blank'>Github </a>
          <a href='https://github.com/' className='btn btn-primary' target='blank'> live demo</a>
          </div>
          
        </article> */
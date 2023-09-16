import React, {useState} from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setItems(updatedItems);
  }
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={()=> setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={()=> filterItem("Web App")}>Web Apps</span>
        <span className="work__item" onClick={()=> filterItem("Non-Web App")}>Non-Web Apps</span>
        {/* <span className="work__item" onClick={()=> filterItem("Other")}>Other</span> */}
      </div>

      <div className="work__container grid">
        {items.map((elem)=>{
          const{id,image,title,category,link,desc} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <div className="span work__category">{category}</div>
              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>
              <a href={link} target="_blank" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
import './Section.css'
import Card from '../Card'
import Carousel from '../Carousel'
import { useState } from 'react'

function index({title, playListData, navId}) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className='section'>
      <div className="section-header">
        <p className="title">{title}</p>
        <p 
          className='section-toggle-btn'
          onClick={() => setIsCollapsed(!isCollapsed)}
          >{isCollapsed? "Show all" : "Collapsed"}</p>
      </div>
      {isCollapsed? <div className='card-container'>
        {playListData.map(element => {
          return(
            <Card 
              key={element.id} 
              imgSrc={element.image} 
              followers={element.follows} 
              title={element.title} 
            />
          )
        })}
      </div> : <Carousel playListData={playListData} navId={navId}/>}  
    </div>
  )
}

export default index

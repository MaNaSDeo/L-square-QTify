import './Section.css'
import Card from '../Card'

function index({title, playListData}) {
  return (
    <div className='section'>
      <p className="title">{title}</p>
      <div className='card-container'>
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
      </div>  
    </div>
  )
}

export default index

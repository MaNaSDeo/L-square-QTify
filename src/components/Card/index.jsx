import "./Card.css"

function index({imgSrc, followers, title}) {
  return (
    <div className="card">
      <div className="card-main">
        <div className="card-main-top">
            {/* Display album image */}
            {/* <img src="albumImage.jpg" alt="Album Image" /> */}
            <img src={imgSrc} alt="Album Image" />
        </div>
        <div className="card-main-bottom">
            {/* Display number of followers */}
            <span>{followers}</span>
        </div>
      </div>
        <div className="card-bottom">
            {/* Display the title */}
            <span>{title}</span>
        </div>
    </div>
  )
}

export default index

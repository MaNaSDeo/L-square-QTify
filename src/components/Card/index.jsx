import "./Card.css"
import Tooltip from '@mui/material/Tooltip';

function index({imgSrc, followers, title, songsCount}) {
  return (
    <Tooltip title={`${songsCount} songs`} placement="top">
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
    </Tooltip>
  )
}

export default index

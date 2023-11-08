import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage'
import Card from './components/Card';
import Grid from './components/Grid';

function App() {

  return (
    <>
      <Navbar />
      <HeroImage/>
      <Card albumImg={"albumImage.jpg"} followers={"100M Follows"} title={"New Bollywood"} />
      <Grid />
    </>
  )
}

export default App
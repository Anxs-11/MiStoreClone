
import './App.css';
import Prenavbar from './componenets/prenavbar';
import Navbar from './componenets/navbar.js'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Slider from "./componenets/slider.js"
import data from "./data/data.json"
import Offers from "./componenets/offers.js"
import Heading from "./componenets/heading.js"
import StarProduct from "./componenets/starproduct.js"
import Hotaccessoriesmenu from "./componenets/hotaccessoriesmenu.js"
import Hotaccessories from './componenets/hotaccessories.js';
import ProductReviews from "./componenets/productreviews.js"
import Videos from "./componenets/videos.js"
import Banner from "./componenets/banner.js"
import Footer from "./componenets/footer.js"
import NavOptions from "./componenets/navoptions.js"
import NavCard from './componenets/NavCard';
function App() {
  return (
    <Router >
    <Prenavbar/>
      <Navbar />

      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

    <Slider start={data.banner.start}/>
    <Offers offers={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starproduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <Hotaccessoriesmenu />
    
    <Routes>
        <Route exact path=""
          element=<Hotaccessories items={data.hotAccessories.music} Cover={data.hotAccessoriesCover.music} /> >
        </Route>
        <Route exact path="/music"
      element=<Hotaccessories items={data.hotAccessories.music} Cover={data.hotAccessoriesCover.music} /> >
      </Route>

      <Route exact path="/smartDevices"
          element=<Hotaccessories items={data.hotAccessories.smartDevice} Cover={data.hotAccessoriesCover.smartDevice} /> >
      </Route>

      <Route exact path="/home"
          element=<Hotaccessories items={data.hotAccessories.home} Cover={data.hotAccessoriesCover.home} /> >
      </Route>

      <Route exact path="/lifestyle"
          element=<Hotaccessories items={data.hotAccessories.lifeStyle} Cover={data.hotAccessoriesCover.lifeStyle} /> >
      </Route>

      <Route exact path="/mobileAccessories"
          element=<Hotaccessories items={data.hotAccessories.mobileAccessories} Cover={data.hotAccessoriesCover.mobileAccessories} /> >
      </Route>

    </Routes>
    <Heading text="PRODUCT REVIEWS"/>
    <ProductReviews Productreviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}
export default App;

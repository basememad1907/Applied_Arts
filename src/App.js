import Layout from './Compnents/Layout/Layout';
import Home from './Compnents/Home/Home';
import AboutHome from './Compnents/About/AboutHome';
import About from './Compnents/About/About';
import AboutEstablishment from './Compnents/About/AboutEstablishment';
import Education from './Compnents/Education/Education';
import EventsAndNews from './Compnents/EventsAndNews/EventsAndNews';
import Gallery from './Compnents/Gallery/Gallery';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AboutIntroduction from './Compnents/About/AboutIntroduction';
import NotFound from './Compnents/NotFound/NotFound';
import Login from './Compnents/Login/Login';
import EducationHome from './Compnents/Education/EducationHome';
import Strategies from './Compnents/Education/Stratigies';
import Schedules from './Compnents/Education/Schedules';
import ProductDesign from './Compnents/Departments/ProductDesign/ProductDesign';
import ProductDesignHome from './Compnents/Departments/ProductDesign/ProductDesignHome';
import PDGallery from './Compnents/Departments/ProductDesign/PDGallery';
import PDScheduales from './Compnents/Departments/ProductDesign/PDScheduales';
import PDSujects from './Compnents/Departments/ProductDesign/PDSujects';
import PDUpdates from './Compnents/Departments/ProductDesign/PDUpdates';
import Fashion from './Compnents/Departments/Fashion/Fashion';
import FashionHome from './Compnents/Departments/Fashion/FashionHome';
import FashionSubject from './Compnents/Departments/Fashion/FashionSubject';
import FashionScheduales from './Compnents/Departments/Fashion/FashionScheduales';
import FashionGallery from './Compnents/Departments/Fashion/FashionGallery';
import FashionUpdate from './Compnents/Departments/Fashion/FashionUpdate';
import InteriorDesign from './Compnents/Departments/InteriorDesign/InteriorDesign';
import InteriorDesignHome from './Compnents/Departments/InteriorDesign/InteriorDesignHome';
import IntDesignSubjects from './Compnents/Departments/InteriorDesign/IntDesignSubjects';
import IntDesignScheduals from './Compnents/Departments/InteriorDesign/IntDesignScheduals';
import IntDesignGallery from './Compnents/Departments/InteriorDesign/IntDesignGallery';
import IntDesignUpdates from './Compnents/Departments/InteriorDesign/IntDesignUpdates';
import ADV from './Compnents/Departments/Advertising/ADV';
import AdvHome from './Compnents/Departments/Advertising/AdvHome';
import AdvSubject from './Compnents/Departments/Advertising/AdvSubject';
import AdvScheduales from './Compnents/Departments/Advertising/AdvScheduales';
import AdvGallery from './Compnents/Departments/Advertising/AdvGallery';
import AdvUpdate from './Compnents/Departments/Advertising/AdvUpdate';
import Cinema from './Compnents/Departments/Cinema/Cinema';
import CinemaHome from './Compnents/Departments/Cinema/CinemaHome';
import CinemaSubjects from './Compnents/Departments/Cinema/CinemaSubjects';
import CinemaScheduales from './Compnents/Departments/Cinema/CinemaScheduales';
import CinemaGallery from './Compnents/Departments/Cinema/CinemaGallery';
import CinemaUpdates from './Compnents/Departments/Cinema/CinemaUpdates';
import Photos from './Compnents/Gallery/Photos';
import Videos from './Compnents/Gallery/Videos';
import Ai from './Compnents/AI/Ai';

function App() {
  let router = createBrowserRouter(
    [
      {path:'',element:<Layout />, children:[
        {index: true , element:<Home/>},
        {path:"login" , element:<Login/>},
        {path : "aboutHome" , element:<AboutHome />, children:[
          {index: true , element:<About/>},
          {path : 'aboutIntroduction' , element:<AboutIntroduction />},
          {path : 'aboutEstablishment' , element:<AboutEstablishment />}
        ]},
        {path : "educationHome" , element:<EducationHome />,children:[
          {index: true , element:<Education/>},
          {path:"strategies" , element:<Strategies/>},
          {path:"schedules" , element:<Schedules/>}
        ]},
        {path:"productDesign",element:<ProductDesign/>, children:[
          {index: true , element:<ProductDesignHome/>},
          {path:"pdGallery" , element:<PDGallery/>},
          {path:"pdSceduales" , element:<PDScheduales/>},
          {path:"pdSujects" , element:<PDSujects/>},
          {path:"pdUpdates" , element:<PDUpdates/>},
        ]},  
        {path:"Fashion" , element:<Fashion/>, children:[
          {index: true , element:<FashionHome/>},
          {path:"fashionSubject" , element:<FashionSubject/>},
          {path:"fashionScheduales" , element:<FashionScheduales/>},
          {path:"fashionGallery" , element:<FashionGallery/>},
          {path:"fashionUpdate" , element:<FashionUpdate/>},
        ]},
        {path:"InteriorDesign" , element:<InteriorDesign/>, children:[
          {index: true , element:<InteriorDesignHome/>},
          {path:"intDesignSubjects" , element:<IntDesignSubjects/>},
          {path:"intDesignScheduals" , element:<IntDesignScheduals/>},
          {path:"intDesignGallery" , element:<IntDesignGallery/>},
          {path:"intDesignUpdates" , element:<IntDesignUpdates/>},
        ]},
        {path:"ADV" , element:<ADV/>, children:[
          {index: true , element:<AdvHome/>},
          {path:"advSubject" , element:<AdvSubject/>},
          {path:"advScheduales" , element:<AdvScheduales/>},
          {path:"advGallery" , element:<AdvGallery/>},
          {path:"advUpdate" , element:<AdvUpdate/>},
        ]},
        {path:"Cinema" , element:<Cinema/>, children:[
          {index: true , element:<CinemaHome/>},
          {path:"cinemaSubjects" , element:<CinemaSubjects/>},
          {path:"cinemaScheduales" , element:<CinemaScheduales/>},
          {path:"cinemaGallery" , element:<CinemaGallery/>},
          {path:"cinemaUpdates" , element:<CinemaUpdates/>},
        ]},
        {path : "eventsAndNews" , element:<EventsAndNews/>},
        {path : "gallery" , element:<Gallery /> , children:[
          {index: true , element:<Photos/>},
          {path:"videos" , element:<Videos/>},
        ]},
        {path : "ai" , element:<Ai/>},
        {path : "*" , element:<NotFound />}
      ]}
    ]
  )
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

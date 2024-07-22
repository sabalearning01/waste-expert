import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Agent from './Pages/Agentform/Agent'
import Treasure from './Pages/Treasureslistpage/Treasure'
import Services from './Pages/Services/Services'
import Flippage from './Pages/Flippage/Flippage'
import Footer from './Components/Footer/Footer'
import Accordion from './Components/Accordion/Accordion'
import Seemorebtn from './Components/Seemorebtn/Seemorebtn'
import Api from './Pages/API/Api'





function App() {
{/* <Expandable>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto fugit omnis error consequuntur ab, obcaecati assumenda voluptas
        debitis nostrum praesentium expedita delectus non esse minima dolores. Quisquam, consequatur quos!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto fugit omnis error consequuntur ab, obcaecati assumenda voluptas
        debitis nostrum praesentium expedita delectus non esse minima dolores. Quisquam, consequatur quos!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto fugit omnis error consequuntur ab, obcaecati assumenda voluptas
        debitis nostrum praesentium expedita delectus non esse minima dolores. Quisquam, consequatur quos!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto fugit omnis error consequuntur ab, obcaecati assumenda voluptas
        debitis nostrum praesentium expedita delectus non esse minima dolores. Quisquam, consequatur quos!
       
       </Expandable> */}

  return (
        <BrowserRouter>
        {/* <main> */}
           {/* <Footer />    */}
             {/* <Accordion/> */}
            {/* <Navbar2/>  */}
              {/* <Seemorebtn/>   */}
          
            <Routes>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="agentform" element={<Agent/>}/> 
            <Route path="treasure" element={<Treasure/>}/> 
            <Route path="services" element={<Services/>}/> 
            <Route path="flippage" element={<Flippage/>}/> 
            <Route path="api" element={<Api/>}/>
          </Routes>  
        {/* </main> */}
        </BrowserRouter>
  )
}

export default App

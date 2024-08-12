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
import Navbar2 from './Components/Navbar2/Navbar2'
import Hamburger from './Images/Hamburger.png'
import Newuser from './Pages/Newuser/Newuser'
import Resetpassword from './Pages/Resetpassword/Resetpassword'
import Forgotpassword from './Pages/Forgotpassword/Forgotpassword'
import { Dashboard } from '@mui/icons-material'
import Dash from './Pages/Dash/Dash'
import Dashcomp from './Components/Dashcomp/Dashcomp'
import Successpage from './Pages/Successpage/Successpage'







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
            {/* <Navbar/> */}
              {/* <Seemorebtn/>   */}
              {/* <Dashcomp/> */}
              {/* <Slider/> */}
{       
            <Routes>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="agentform" element={<Agent/>}/> 
            <Route path="treasure" element={<Treasure/>}/> 
            <Route path="services" element={<Services/>}/> 
            <Route path="flippage" element={<Flippage/>}/> 
            <Route path="api" element={<Api/>}/>
            <Route path = "newuser" element={<Newuser/>}/>
            <Route path="resetpassword" element={<Resetpassword/>}/>
            <Route path="forgotpassword" element={<Forgotpassword/>}/>
            <Route path='dash' element={<Dash/>}/>
            <Route path="successpage" element={<Successpage/>}/>
          </Routes>    }
        {/* </main> */}
        </BrowserRouter>
  )
}

export default App

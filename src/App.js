
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PortfolioComponents from './portfolioComponents';
import SkillPage from './navPage/SkillsPage';
import AboutPage from './navPage/AboutPage';
import ContactPage from './navPage/ContactPage';
import ProjectsPage from './navPage/ProjectsPage';
function App() {
  return (

<BrowserRouter>
  <Routes>
    <Route path='/' element={<PortfolioComponents/>}/>
 <Route path="skills" element={<SkillPage/>}/>
 <Route path="about" element={<AboutPage/>}/>
 <Route path="contact" element={<ContactPage/>}/>
 <Route path="projects" element={<ProjectsPage/>}/>
  </Routes>
</BrowserRouter>

  );
}

export default App;

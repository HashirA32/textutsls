import './App.css';
import Navbar from './comps/Navbar';
import PropTypes from 'prop-types';
import Footer from './comps/Footer';
import Content from './comps/Content';
function App() {
  return (
   <> 
      <div className="fractions">
      <Navbar title = "Hashir" about = "about"/>
      < Content/>
      <Footer/>
      </div>
   </>
  );
}

export default App;
Navbar.PropTypes = {title : PropTypes.string,
                    about : PropTypes.string,
}
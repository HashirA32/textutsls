import './App.css';
import Navbar from './comps/Navbar';
import PropTypes from 'prop-types';
import Footer from './comps/Footer';
import Content from './comps/Content';
import TextForm from './comps/TextForm';
function App() {
  return (
   <> 
      <div className="fractions">
      <Navbar title = "Hashir" about = "about"/>
      < Content/>
      <div className="container box ">
      <TextForm heading = "Enter the Text "/>
      </div>
      <Footer/>
      </div>
   </>
  );
}

export default App;
Navbar.propTypes = {title : PropTypes.string,
                    about : PropTypes.string,
                    heading : PropTypes.string,
}
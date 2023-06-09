import React from 'react';
import ReactDOM from 'react-dom';
import UploadPage from './components/UploadPage';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Home from './components/Home';
import PsUi from './components/PsUi';
import { Nav, NavLink } from 'react-bootstrap';
import Contact from './components/Contact';


// ReactDOM.render(<SignUp />, document.getElementById('root'));
// ReactDOM.render(<LoginForm />, document.getElementById('root'));

const App = () => {
  return (
// //    <UploadPage />
//     <Router>
//       <NavLink to="/" ></NavLink>
//       <NavLink to="/home"><Home /></NavLink>
//       <NavLink to ="/contact"><Contact /></NavLink>
//       <NavLink to ="/publish"><UploadPage /></NavLink>
//       <Routes>
//         <Route path="/" element={<PsUi />} />
//         <Route path="/home" element = {<Home />} />
//         <Route path="/contact" element = {<Contact />} />
//       </Routes>
//     </Router>
<div>
    <PsUi />
</div>

  );
};

export default App;

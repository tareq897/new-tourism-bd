import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Basic/Header/Header';
import Footer from './components/Basic/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Booking from './components/Booking/Booking';
import HandleBooking from './components/HandleBooking/HandleBooking';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>


          <Route exact path="/home">
            <Home ></Home>
          </Route>

          
          <Route exact path="/about">
            <About></About>
          </Route>

          <PrivateRoute exact path='/booking/:serviceId'>
           <Booking></Booking>
        </PrivateRoute>


          <PrivateRoute exact path="/handlebooking">
          <HandleBooking></HandleBooking>
          </PrivateRoute>
          


         

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route>

          </Route>


        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
     
    

    </div>
  );
}

export default App;

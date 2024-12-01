import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import AboutCompany from './components/AboutCompany';
import AboutCustomers from './components/AboutCustomers';
import AboutProducts from './components/AboutProducts';
import First from './components/First';
import GrowTable from './components/GrowTable';
import Header from './components/Header';
import Second from './components/Second';
import ValueChange from './components/ValueChange';
import APICalls from './components/APICalls';
import ParemeterisedRoute from './components/ParameterisedRoute';
import UserList from './components/UserList';
import userDetails from './components/UserDetails';
import Cars from './components/Cars';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div style={{padding: '1rem'}}>
        <Routes>
          <Route path='/' Component={ValueChange} />
          <Route path='/first' Component={First} /> 
          <Route path='/second' Component={Second} /> 
          <Route path='/table' Component={GrowTable} /> 
          <Route path='/api' Component={APICalls} /> 
          <Route path='/user-list' Component={UserList} /> 
          <Route path='/user-details/:id/:name' Component={userDetails} /> 
          <Route path='about' Component={About}> 
            <Route path='company' Component={AboutCompany} />
            <Route path='customer' Component={AboutCustomers} />
            <Route path='product' Component={AboutProducts} />
          </Route>
          <Route path='/cars' Component={Cars}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
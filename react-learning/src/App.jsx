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
import { RegisterUser } from './components/RegisterUser';
import { Login } from './components/Login';
import { AuthProvider } from './context/AuthContext';
import Redux from './components/Redux';
import { RestrictRoute } from './components/RestrictRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <div style={{padding: '1rem'}}>
          <Routes>
            <Route path='/' Component={ValueChange} />
            <Route path='/first' Component={First} /> 
            <Route path='/second' Component={Second} /> 
            <Route path='/table' Component={GrowTable} /> 
            <Route path='/api' 
              element={
                <RestrictRoute>
                    <APICalls />
                </RestrictRoute>
              }/> 
            <Route path='/user-list' Component={UserList} /> 
            <Route path='/user-details/:id/:name' Component={userDetails} /> 
            <Route path='/redux' Component={Redux} /> 
            <Route path='about' Component={About}> 
              <Route path='company' Component={AboutCompany} />
              <Route path='customer' Component={AboutCustomers} />
              <Route path='product' Component={AboutProducts} />
            </Route>
            <Route path='/cars' 
              element={
                <RestrictRoute>
                    <Cars />
                </RestrictRoute>
              }>  
            </Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/register' Component={RegisterUser}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App;
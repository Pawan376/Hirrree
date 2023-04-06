import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalNavbar from './Components/GlobalNavbar/GlobalNavbar';
import Dashboard from './Components/SitePages/Dashboard';
import Generator from './Components/SitePages/Generator';
import Search from './Components/SitePages/Search';
import SignIn from './Components/SignIn/SignIn';
import RequirementAnalysis from './Components/SitePages/RequirementAnalysis';
import ResumeAnalysis from './Components/SitePages/ResumeAnalysis';
import Creator from './Components/SitePages/Creator';
import Training from './Components/SitePages/Training';

import {auth,googleProvider,fbprovider} from './Components/config'
import {signInWithPopup, FacebookAuthProvider} from 'firebase/auth'

const App = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);

  const googleLoginHandler = () =>{
    // const [email , setEmail] = useState('')
      signInWithPopup(auth,googleProvider).then(data=>{
        localStorage.setItem("email", data.user.email)
        setUserData(data)
        setLogin(true)
      })
  }

  const fbLoginHandler = () =>{
    // const [email , setEmail] = useState('')
      signInWithPopup(auth,fbprovider).then(data=>{
        console.log("FB DATA >>>>>>>>>>",data);
      }).catch(err => console.log(err.message));
  }


  const logoutHandler = () =>{
    setLogin(false);
  }

  return (
    <div>
        {login? (
          <div>
            <GlobalNavbar userData={userData} logoutHandler={logoutHandler}/>
            <Routes>
              <Route path="/" element = {<Dashboard/>} />
              <Route path="/generator" element = {<Generator />} />
              <Route path="/search" element = {<Search />} />
              <Route path="/requirementAnalysis" element = {<RequirementAnalysis />} />
              <Route path="/resumeAnalsis" element = {<ResumeAnalysis />} />
              <Route path="/creator" element = {<Creator />} />
              <Route path="/training" element = {<Training />} />
            </Routes>
          </div>
         ) : <SignIn googleLoginHandler={googleLoginHandler}  fbLoginHandler = {fbLoginHandler}/>}
    </div>
  );
}

export default App
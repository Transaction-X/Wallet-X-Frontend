
import { useEffect, useState, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import Expence from './components/Expence'
import Income from './components/Income'
import Transaction from './components/Transactions'
import AlertState from './context/StateFiles/AlertState'
import LoginState from './context/StateFiles/LoginState'
import './CSS/App.css'
import ProfileState from "./context/StateFiles/ProfileState";
import TransactionState from "./context/StateFiles/TransactionState";
import ChartState from "./context/StateFiles/ChartState";
import SidebarState from "./context/StateFiles/SidebarState";
function App() {


  return (

    <>

      <LoginState>
        <ProfileState>
        <SidebarState>

          <AlertState>
            <TransactionState>
              <ChartState>
                <BrowserRouter>

                  <Routes>
                    <Route exact path="/" element={<Login />}>

                    </Route>
                    <Route exact path="/signup" element={<Signup />}>

                    </Route>
                    <Route exact path="/login" element={<Login />}>

                    </Route>
                    <Route exact path="/dashboard" element={<Dashboard />}>

                    </Route>
                    <Route exact path="/expense" element={<Expence />}>
                    </Route>
                    <Route exact path="/income" element={<Income />}>
                    </Route>
                    <Route exact path="/transaction" element={<Transaction />}>
                    </Route>
                  </Routes>


                </BrowserRouter>
              </ChartState>

            </TransactionState>

          </AlertState>
          </SidebarState>
        </ProfileState>
      </LoginState>



    </>
  );
}

export default App;

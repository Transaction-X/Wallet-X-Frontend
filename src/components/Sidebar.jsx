import React, { useContext, useState } from 'react'
import '../CSS/Sidebar.css'
import { Link, useNavigate } from 'react-router-dom'
import SidebarContext from '../context/ContextFiles/SidebarContext'
const Sidebar = () => {
  const navigate = useNavigate()
  const sidebarProps = useContext(SidebarContext)
  const logout = ()=> {
    window.localStorage.clear()
    navigate('/login')
  }
  
  return (
    <>
    <div className='sidebar' id='sidebar' style={{width:sidebarProps.collapse===true?"70px":"17%", transition:"all 0.5s"}}>
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3594/3594397.png"
            className="logoImg"
            alt="logo"
          />
          <h2 id='logoTitle' style={{display:sidebarProps.collapse===true?"none":"block"}}>WalletX</h2>
        </div>
        <hr />
        <div className="sidebar-menu">
          <ul className="sidebar-ul">
            <li>
              <Link to="/dashboard"> <i className="bx bxs-dashboard"></i
              ><span className='menuItems' style={{display:sidebarProps.collapse===true?"none":"block"}}>Dashboard</span> </Link>
            </li>
            <li>
              <Link to="/income"><i className="bx bx-money-withdraw"></i
              > <span className='menuItems' style={{display:sidebarProps.collapse===true?"none":"block"}}>Income</span> </Link>
            </li>
            <li>
              <Link to="/expense"><i className="bx bx-credit-card"></i
              > <span className='menuItems' style={{display:sidebarProps.collapse===true?"none":"block"}}>Expense</span> </Link>
            </li>
            <li>
              <Link to="/transaction"><i className="bx bxs-wallet"></i
              > <span className='menuItems' style={{display:sidebarProps.collapse===true?"none":"block"}}>Transactions</span> </Link>
            </li>

          </ul>
        </div>
        <div className='logout'>
            <button onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
    <button id='collapseBtn' onClick={()=>sidebarProps.collapse===false?sidebarProps.isCollapse(true):sidebarProps.isCollapse(false)} style={{right:sidebarProps.collapse===true?"-40%":"-13%",scale:sidebarProps.collapse===true?"-1":"1"}}><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    </>
    
  )
}

export default Sidebar
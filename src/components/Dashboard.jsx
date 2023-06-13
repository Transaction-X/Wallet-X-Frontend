import React, { useContext } from 'react'
import '../CSS/Dashboard.css'
import Sidebar from './Sidebar'
import TransactionContext from '../context/ContextFiles/TransactionContext'
import ActivityGraph from './ActivityGraph'
import IncomePieChart from './IncomePieChart'
import ExpensePieChart from './ExpensePieChart'
import SidebarContext from '../context/ContextFiles/SidebarContext'
const Dashboard = () => {
  const transactionProps = useContext(TransactionContext)
  const sidebarProps = useContext(SidebarContext)
  return (
    <>
    <div className="main">
    <Sidebar/>
    <div className='dashboard' style={{width:sidebarProps.collapse===true?"95%":""}}>
        <div className="content">
          <h2>Dashboard</h2>
        </div>
        <div className="tracker">
          <div className="tracker-item">
            <h2>Income</h2>
            <div className="amount">{transactionProps.totalIncome}</div>
          </div>
          <div className="tracker-item">
            <h2>Expense</h2>
            <div className="amount">{transactionProps.totalExpense}</div>
          </div>
          <div className="tracker-item">
            <h2>Balance</h2>
            <div className="amount">{transactionProps.balance}</div>
          </div>
        </div>
        <div className="charts">
          <div className="leftCharts">
            {/* <div className="activityGraph"> */}
              <h3>Activity Graph</h3>
              <div className='activity'>
                <ActivityGraph/>
              </div>
            {/* </div> */}
          </div>
           <div className="rightCharts">
            <div className="pieChart">
              <h3 style={{textAlign:"center"}}>Income Types</h3>
             <div className="incomeTypesChart">
              <IncomePieChart/>
             </div>
              <hr />
            </div>
            <div className="pieChart">
              <h3 style={{textAlign:"center"}}>Expense Types</h3>
             <div className="incomeTypesChart">
              <ExpensePieChart/>
             </div>
              <hr />
            </div>
          </div>  
        </div>
    </div>
    </div>
    
    </>
    
  )
}

export default Dashboard
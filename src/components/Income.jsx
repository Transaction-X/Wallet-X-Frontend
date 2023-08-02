import React, { useContext, useEffect } from "react";
import "../CSS/Dashboard.css";
import "../CSS/Income.css";
import Sidebar from './Sidebar'
import ProfileContext from "../context/ContextFiles/ProfileContext";
import TransactionContext from "../context/ContextFiles/TransactionContext";
import ChartContext from "../context/ContextFiles/ChartContext";
import { Chart } from "chart.js";
import IncomeChart from "./IncomeChart";
import IncomePieChart from "./IncomePieChart";
import SidebarContext from "../context/ContextFiles/SidebarContext";

const Income = () => {
  const chartProps = useContext(ChartContext)
  const profileProps = useContext(ProfileContext)
  const transactionProps = useContext(TransactionContext)
  const sidebarProps = useContext(SidebarContext)
  const addIncome = async(e) => {

    e.preventDefault()
    const IncomeDescription = document.getElementById('incomeDescription')
    const IncomeAmount = document.getElementById('incomeAmount')
    // console.log(ExpenceDescription,ExpenceAmount)
    let incObj = {
      description:IncomeDescription.value,
      amount:IncomeAmount.value,
      isIncome:true,
      user:profileProps.User._id
    }
    console.log(incObj)
    const response = await fetch('https://wallet-x-backend.vercel.app/api/transaction/addtransaction', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(incObj), // body data type must match "Content-Type" header
    });
    const data = await response.json()
    console.log(data)
    transactionProps.setTotalIncome(transactionProps.totalIncome+parseInt(IncomeAmount.value))
    transactionProps.setBalance(transactionProps.balance+parseInt(IncomeAmount.value))
    transactionProps.fetchTransactions()

  }
 
  return (
    <>
    <div className="main" >
    <Sidebar/>
    <div className="income" style={{width:sidebarProps.collapse===true?"95%":""}}>
      <div class="content">
        <h2>Income</h2>
      </div>
      <div class="income-tracker">
        <div class="left">
          <div class="left-top">
            <div class="tracker-item">
              <h2>Income</h2>
              <div class="amount">{transactionProps.totalIncome}</div>
            </div>
            <div class="tracker-item">
              <h2>Balance</h2>
              <div class="amount">{transactionProps.balance}</div>
            </div>
          </div>
          <div class="left-bottom">
            <div class="add">
              <h3>Add Income</h3>
              
                
                  <input
                    type="text"
                    id="incomeDescription"
                    placeholder="Income Description"
                  />

                  <input
                    type="number"
                    id="incomeAmount"
                    placeholder="Income amount"
                  />
                <div class="form-control">
                  <button class="incomeSubmit" type="submit" onClick={addIncome}>Add Income</button>
                </div>
              
            </div>
          </div>
        </div>
        <div class="rightIncome">
          <div class="right-topIncome">
              
                  <h3>Activity Graph</h3>
                  <div className="incomeChart">
                      {/* <canvas id="activityGraphChart"></canvas> */}
                      <IncomeChart/>
                  </div>
              
          </div>
           <div class="right-bottomIncome">
              <div class="incomePieChartDiv">
                  <h3>Income Types</h3>
                  <div className="incomeTypesChart">
              <IncomePieChart/>
             </div>
                  <hr />
              </div>
            </div> 
    </div>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default Income;

import React, { useState,useEffect, useContext } from 'react'
import "../CSS/Dashboard.css";
import "../CSS/Transactions.css";
import Sidebar from './Sidebar'
import TransactionContext from '../context/ContextFiles/TransactionContext'
import SidebarContext from '../context/ContextFiles/SidebarContext';
const Transactions = () => {
  const transactionProps = useContext(TransactionContext)
  const sidebarProps = useContext(SidebarContext)
  const deleteTransaction = async(_id,isIncome,amount)=> {
    console.log(_id,isIncome,amount)
    const response = await fetch(`http://localhost:5000/api/transaction/deletetransaction/${_id}`, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
    })
    const data = await response.json()
    // console.log(data)
    if(data.success) {
      if(isIncome) {
        transactionProps.setTotalIncome(transactionProps.totalIncome-amount)
        transactionProps.setBalance(transactionProps.balance-amount)
        const newIncome = transactionProps.income.filter((el)=> {
          if(el._id!==_id) {
            return el
          }
        })
        transactionProps.setIncome(newIncome)
        transactionProps.fetchTransactions()
      }
      else {
        transactionProps.setTotalExpense(transactionProps.totalExpense-amount)
        transactionProps.setBalance(transactionProps.balance+amount)
        const newExpense = transactionProps.expense.filter((el)=> {
          if(el._id!==_id) {
            return el
          }
        })
        transactionProps.setExpense(newExpense)
        transactionProps.fetchTransactions()
      }
    }
  }

  return (
    <>
    <div className="main">
      <Sidebar/>
    <div className='transactions' style={{width:sidebarProps.collapse===true?"95%":""}}>
        <div class="content">
          <h2>Transactions</h2>
        </div>
        <table className='transactionTable'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                transactionProps.transactions.map((transaction,index) => {
                  if(transaction.amount!==0) {

                    return (
                      <tr key={index} style={{color:transaction.isIncome?"green":"red"}}>
                        <td>{transaction.date.split('T')[0]}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td><i class="fa-solid fa-xmark" style={{cursor:"pointer"}} onClick={()=>deleteTransaction(transaction._id,transaction.isIncome,transaction.amount)}></i></td>
                      </tr>
                    )
                  }
                }
                )
              }
              
              
            </tbody>
            <tfoot>
                <tr>
                  <th>-</th>
                  <th>Balance</th>
                  <th>{transactionProps.transactions?transactionProps.balance:0}</th>
                </tr>
              </tfoot>
          </table>
    </div>
    </div>
    
    </>
    
  )
}

export default Transactions
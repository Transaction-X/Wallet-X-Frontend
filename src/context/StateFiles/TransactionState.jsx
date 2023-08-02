import React, {useContext, useEffect, useState} from 'react'
import TransactionContext from '../ContextFiles/TransactionContext'
import ProfileContext from '../ContextFiles/ProfileContext'

const TransactionState = (props)=> {
    const [transactions, setTransactions] = useState([])
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    const [balance, setBalance] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)
    const profileProps = useContext(ProfileContext)
  
    const fetchTransactions = async () => {
    //  console.log(profileProps.checkUser)
      try {
        if(profileProps.checkUser) {
          // console.log(profileProps.User,profileProps.checkUser)
          const res = await fetch(`https://wallet-x-backend.vercel.app/api/transaction/fetchalltransactions/${profileProps.User._id}`)
          const data = await res.json()
          console.log(data)
          setTransactions(data)
          
        }
      } catch (err) {
        console.error(err)
      }
    }
    useEffect(() => {
      fetchTransactions()
     
    }, [profileProps.checkUser])
    const setIncomeAndExpense = () => {
      const income = transactions.filter((el)=> {
        if(el.isIncome) {
          return el
        }
      })
      // console.log(income)
      setIncome(income)
      const expense = transactions.filter((el)=> {
        if(!el.isIncome) {
          return el
        }
      }
      )
      // console.log(expense)
      setExpense(expense)
      // getBalance()

    }
    useEffect(()=> {
      if(transactions.length>0) {
      setIncomeAndExpense()
      }
    },[transactions])
    const getBalance = () => {
      // console.log(income,expense)
      let incomeAmount = 0
      let expenseAmount = 0
      income.forEach((el)=> {
        incomeAmount+=el.amount
      })
      expense.forEach((el)=> {
        // console.log(el.amount)
        expenseAmount+=el.amount
      })
      console.log(incomeAmount,expenseAmount)
      setBalance(incomeAmount-expenseAmount)
      setTotalIncome(incomeAmount)
      setTotalExpense(expenseAmount)
    }
  
    useEffect(() => { 
      
        if(income.length>0 && expense.length>0) {

          getBalance()
        }
      
    }, [income,expense])
    return (
        <TransactionContext.Provider value={{transactions,setTransactions,income,setIncome,expense,setExpense,balance,setBalance,totalIncome,setTotalIncome,totalExpense,setTotalExpense,fetchTransactions}}>
           
            {props.children}
        </TransactionContext.Provider>
    )
    }
export default TransactionState 
import React, {useContext, useEffect, useState} from 'react'
import ChartContext from '../ContextFiles/ChartContext'
import TransactionContext from '../ContextFiles/TransactionContext'
import ProfileContext from '../ContextFiles/ProfileContext'
const ChartState = (props)=> {
  const TransactionProps = useContext(TransactionContext)
  const ProfileProps = useContext(ProfileContext)
  const [incomeChart,setIncomeChart] = useState({})
  const [expenseChart,setExpenseChart] = useState({})
  const [balanceChart,setBalanceChart] = useState({})
  const [incomeTypes,setIncomeTypes] = useState({})
  const [ExpenseTypes,setExpenseTypes] = useState({})
  const setIncomeCharValues = () => {
    const incomeByDate ={}
    const incomeByDateArray = TransactionProps.income.reverse()
    //console.log(incomeByDateArray)
    incomeByDateArray.forEach((el)=> {
      const { date, amount } = el;
      let newDate = date.split("T")[0];
      // console.log(date.split("T"))
      if (incomeByDate[newDate]) {
        incomeByDate[newDate] += amount;
      } else {
        incomeByDate[newDate] = amount;
      }
    })
    console.log(incomeByDate)
    setIncomeChart(incomeByDate)
    const incomeByType = {}
    TransactionProps.income.forEach((el)=> {
      const {description,amount} = el
      if(incomeByType[description]) {
        incomeByType[description] += amount
      }
      else {
        incomeByType[description] = amount
      }

    })
    console.log(Object.keys(incomeByType))
    console.log(Object.values(incomeByType))
    setIncomeTypes(incomeByType)
  }
  const setExpenseCharValues = () => {
    const expenseByDate ={}
    const expenseByDateArray = TransactionProps.expense.reverse()
    expenseByDateArray.forEach((el)=> {
      const { date, amount } = el;
      let newDate = date.split("T")[0];
      if (expenseByDate[newDate]) {
        expenseByDate[newDate] += amount;
      } else {
        expenseByDate[newDate] = amount;
      }
    })
    console.log(expenseByDate)
    setExpenseChart(expenseByDate)
    const expenseByType = {}
    TransactionProps.expense.forEach((el)=> {
      const {description,amount} = el
      if(expenseByType[description]) {
        expenseByType[description] += amount
      }
      else {
        expenseByType[description] = amount
      }

    })
    // console.log(expenseByType)
    setExpenseTypes(expenseByType)
  }
  const setBalanceCharValues = () => {
    // const balanceByDate = {}
    // const incomeXValues = Object.keys(incomeChart)
    // const incomeYValues = Object.values(incomeChart)
    // const expenseXValues = Object.keys(expenseChart)
    // const expenseYValues = Object.values(expenseChart)
    const allKeys = [...new Set([...Object.keys(incomeChart), ...Object.keys(expenseChart)])];
    // console.log(allKeys)
  const result = {};

  for (const key of allKeys) {
     
    const value1 = incomeChart[key] || 0;
    const value2 = expenseChart[key] || 0;
    // console.log(value2)
    result[key] = value1 - value2;
  }
  console.log(result)
  setBalanceChart(result)
  }

  useEffect(()=> {
    if(ProfileProps.checkUser===true) {
    setIncomeCharValues()
    }
    
  },[TransactionProps.income])
  useEffect(()=> {
    if(ProfileProps.checkUser===true) {
    setExpenseCharValues()
    }
    // console.log(Object.values(incomeChart))
    // console.log(Object.keys(incomeChart) || Object.keys(expenseChart))
  },[TransactionProps.expense])
  useEffect(()=> {
    if(ProfileProps.checkUser===true) {
    setBalanceCharValues()
    }
  },[incomeChart,expenseChart])
    return (
        <ChartContext.Provider value={{incomeChart,setIncomeChart,expenseChart,setExpenseChart,balanceChart,setBalanceChart,setIncomeCharValues,setExpenseCharValues,setBalanceCharValues,incomeTypes,setIncomeTypes,ExpenseTypes,setExpenseTypes}}>
           
            {props.children}
        </ChartContext.Provider>
    )
    }
export default ChartState 
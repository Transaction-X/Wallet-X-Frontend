import React, { useContext, useEffect, useState } from 'react'
import {} from 'react-chartjs-2'
import ChartContext from '../context/ContextFiles/ChartContext'
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import ProfileContext from '../context/ContextFiles/ProfileContext'
const ExpenseChart = () => {
    const chartProps = useContext(ChartContext)
    const ProfileProps = useContext(ProfileContext)
    const [expenseData,setExpenseData] = useState({
        labels:Object.keys(chartProps.balanceChart),
        datasets: [
            {
              label: "Expense",
              data: Object.values(chartProps.expenseChart),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
            {
                label: "Balance",
              data: Object.values(chartProps.balanceChart),
              backgroundColor: [
                "blue",
              ],
              borderColor: [
                "blue",
              ],
              borderWidth: 1,
            }
          ],
    })
    useEffect(()=> {
      if(ProfileProps.checkUser===true) {
        if(chartProps.expenseChart || chartProps.balanceChart) {
          setExpenseData({
            labels:Object.keys(chartProps.balanceChart),
            datasets: [
                {
                  label: "Expense",
                  data: Object.values(chartProps.expenseChart),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                  ],
                  borderWidth: 1,
                },
                {
                    label: "Balance",
                  data: Object.values(chartProps.balanceChart),
                  backgroundColor: [
                    "blue",
                  ],
                  borderColor: [
                    "blue",
                  ],
                  borderWidth: 1,
                }
              ],
        })
        }
      }
        
    },[chartProps.expenseChart,chartProps.balanceChart])
  return (
    <Line data={expenseData} />
  )
}

export default ExpenseChart

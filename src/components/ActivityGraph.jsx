import React, { useContext, useEffect, useState } from 'react'
import {} from 'react-chartjs-2'
import ChartContext from '../context/ContextFiles/ChartContext'
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import TransactionContext from '../context/ContextFiles/TransactionContext'
import ProfileContext from '../context/ContextFiles/ProfileContext'
const ActivityGraph = () => {
    const chartProps = useContext(ChartContext)
    const ProfileProps = useContext(ProfileContext)
    const transactionProps = useContext(TransactionContext)
    const [activityChartData,setAtivityChartData] = useState({
        labels:Object.keys(chartProps.balanceChart),
        datasets: [
            {
                label: "Income",
                data: Object.values(chartProps.incomeChart),
                backgroundColor: [
                  "green",
                ],
                borderColor: [
                  "green",
                ],
                borderWidth: 1,
              },

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
        // console.log(activityChartData)
        // console.log(charProps.expenseChart)
        if(ProfileProps.checkUser===true) {
          console.log(chartProps.expenseChart)
          if(chartProps.incomeChart || chartProps.expenseChart || chartProps.balanceChart) {
            // sortIncome()
            // sortExpense()
            // console.log(chartProps.expenseChart)
          // console.log(activityChartData,chartProps.incomeChart)
            const dates = 
            setAtivityChartData({
                labels:Object.keys(chartProps.balanceChart),
                datasets: [
                    {
                        label: "Income",
                        data: Object.values(chartProps.incomeChart),
                        backgroundColor: [
                          "green",
                        ],
                        borderColor: [
                          "green",
                        ],
                        borderWidth: 1,
                      },
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
       
    },[chartProps.incomeChart,chartProps.expenseChart,chartProps.balanceChart])
   
  return (
    <Line data={activityChartData} />
  )
}

export default ActivityGraph
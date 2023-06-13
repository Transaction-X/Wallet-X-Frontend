import React, { useContext, useEffect, useState } from 'react'
import {} from 'react-chartjs-2'
import ChartContext from '../context/ContextFiles/ChartContext'
// import {Chart as ChartJS} from 'chart.js/auto'
// import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
import ProfileContext from '../context/ContextFiles/ProfileContext'
const IncomePieChart = () => {
    const chartProps = useContext(ChartContext)
    const ProfileProps = useContext(ProfileContext)
    const [bgColor,setBgColor] = useState([])
    function getRandomColor() { //generates random colours and puts them in string
        var colors = "";
        for (var i = 0; i <Object.keys(chartProps.incomeTypes).length ; i++) {
         var letters = '0123456789ABCDEF'.split('');
         var color = '#';
         for (var x = 0; x < 6; x++ ) {
             color += letters[Math.floor(Math.random() * 16)];
         }
         color = "'"+color+"'"+",";
         colors += color;
        }
        colors = colors.slice(0, -1);
        // console.log(colors);
        setBgColor(colors)
       }
    const [incomeTypePie,setIncomeTypePie] = useState({
        labels:Object.keys(chartProps.incomeTypes),
        datasets: [
            {
                label: "Types of Income",
                data: Object.values(chartProps.incomeTypes),              
                hoverOffset: 4,
                borderWidth: 1,
                // backgroundColor:getRandomColor()
              },
        ]
            
    })
   
    useEffect(()=> {
        // if(ProfileProps.checkUser===true) {
        // }
        // console.log(activityChartData)
        if(ProfileProps.checkUser===true) {
          // console.log(chartProps.incomeChart)
          if(chartProps.incomeTypes) {
          // console.log(activityChartData,chartProps.incomeChart)
            setIncomeTypePie({
                labels:Object.keys(chartProps.incomeTypes),
                datasets: [
                    {
                        label: "Total Income",
                        data: Object.values(chartProps.incomeTypes),              
                        hoverOffset: 4,
                        borderWidth: 1,
                        backgroundColor:getRandomColor()
                      },
                ]
                    
            })
          }
        console.log(Object.entries(chartProps.incomeTypes).length)

        }
       
    },[chartProps.incomeTypes])
   
  return (
    <>
    
    {Object.entries(chartProps.incomeTypes).length === 0 ? "" : <Doughnut data={incomeTypePie} />}
    </>
    
    // <Doughnut data={incomeTypePie} />
    //
  )
}

export default IncomePieChart
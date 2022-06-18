import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
export default function BarChart() {
  // const months = ["January", "February", "March","April","May","June","July","August","September","November","December"]

  return (
    <>
      <Bar 
      
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Current Month",
              data: [65, 59, 80, 81, 56, 55, 40,70,80,90,100],
              backgroundColor: "#BE5050",
            },
            {
                label: "Previous Month",
                data: [65, 59, 80, 81, 56, 55, 40,70,80,90,100],
                backgroundColor: "gray",
            },
          ],
        }}
        height={200}
        width={400}
        options={{
          maintainAspectRation: true,
          responsive:true,
        }}
      />
    </>
  );
}

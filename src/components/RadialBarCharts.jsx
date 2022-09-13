import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

/*const data = [
  {
    name: "18-24",
    score: 15,
    fill: "#8884d8"
  },
  {
    name: "25-29",
    score: 26,
    fill: "#83a6ed"
  }
]*/

function RadialChart( score ) {
  let getScore = score.score.toString()
  let resizeScore = getScore.split('.')
  const data = [
    {
      name: "today",
      score: resizeScore,
      fill: "red"
    },
    {
      name: "25-29",
      score: 100,
      fill: "red"
    }
  ]
  return (
    <ResponsiveContainer width="25%" height={263}>
      <RadialBarChart innerRadius={100} outerRadius={340} startAngle={90} endAngle={450} barSize={15} data={data}>
        <RadialBar label={{ position: "center", fill: "#000" }} dataKey="score"/>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default RadialChart
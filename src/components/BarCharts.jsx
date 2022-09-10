import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const renderLegend = (props) => {
  console.log(props.payload)
  return (
    <div>
      {
        props.payload.map((entry, index) => (
          <div>
            <span key={`color-${index}`}>{entry.color}</span>
            <span key={`item-${index}`}>{entry.value}</span>
          </div>
        ))
      }
    </div>
  );
}
function BarCharts( userActivity ) {
  const data =
  userActivity.activity.sessions.map(donnees => (
    {
      name: donnees.day,
      Poids: donnees.kilogram,
      Calories: donnees.calories,
      fullMark: donnees.calories + donnees.kilogram
    }
  ))
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickLine={false} dy={15}/>
        <YAxis orientation="right" axisLine={false} tickLine={false} dx={15} />
        <Tooltip />
        <Legend verticalAlign="top" align="end" height={50} margin={{ top: 0, left: 0, right: 50, bottom: 0 }} content={renderLegend}/>
        <Bar dataKey="Poids" fill="#282D30" barSize={10} radius={[100, 100, 0, 0]}/>
        <Bar dataKey="Calories" fill="#E60000" barSize={10} radius={[100, 100, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarCharts
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

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
    <BarChart width={1000} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Poids" fill="#282D30" />
      <Bar dataKey="Calories" fill="#E60000" />
    </BarChart>
  );
}

export default BarCharts
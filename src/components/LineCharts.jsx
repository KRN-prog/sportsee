import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function LineCharts( userAvgSession ) {
  const data =
  userAvgSession.avgSession.sessions.map(donnees => (
    {
      name: donnees.day,
      sessionLength: donnees.sessionLength
    }
  ))
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default LineCharts
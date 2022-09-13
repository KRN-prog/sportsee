import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const renderLegend = (props) => {
  console.log(props.payload)
  return (
    <div className="ChartText">
      <span className="ChartText__title">Durée moyenne des sessions</span>
    </div>
  );
}
function LineCharts( userAvgSession ) {
  const data =
  userAvgSession.avgSession.sessions.map(donnees => (
    {
      name: donnees.day,
      sessionLength: donnees.sessionLength
    }
  ))
  return (
    <ResponsiveContainer width="25%" height={263} className="bgLines">
      <LineChart data={data}>
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis dataKey="name" axisLine={false} tick={{fill: '#fff'}} tickLine={false}/>
        <Tooltip />
        <Legend verticalAlign="top" align="end" content={renderLegend}/>
        <Line type="monotone" dataKey="sessionLength" stroke="#fff"/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCharts
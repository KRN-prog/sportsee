import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, Rectangle } from "recharts";

function renderLegend () {
  return (
    <div className="lineChartText">
      <span className="lineChartText__title">Durée moyenne des sessions</span>
    </div>
  );
}

function CustomToolTip({ active, payload }) {
  if(active){
    return(
      <div className="tooltipLine">{payload[0].payload.sessionLength} min</div>
    )
  }
  return null
}
function CustomCursor ({ points }) {
  return (
    <Rectangle fill="#000000" opacity={0.0975} x={points[1].x} width={1000} height={300} />
  )
}

function LineCharts ( props ) {
  const day = ['L','M','M','J','V','S','D']
  const data =
  props.avgSession.sessions.map(donnees => (
    {
      name: day[donnees.day - 1],
      sessionLength: donnees.sessionLength
    }
  ))
  return (
    <div className="chartBox">
      <ResponsiveContainer width="100%" className="bgLines">
        <LineChart data={data}>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" axisLine={false} background="#000" tick={{fill: '#fff'}} tickLine={false}/>
          <Tooltip content={<CustomToolTip  />} cursor={<CustomCursor />}/>
          <Legend verticalAlign="top" align="end" content={renderLegend}/>
          <Line type="natural" dataKey="sessionLength" stroke="#fff" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineCharts.defaultProps = {
  avgSession: {
    userId: 0,
    sessions: 
    [{day: 1, sessionLength: 10},
    {day: 2, sessionLength: 20},
    {day: 3, sessionLength: 30},
    {day: 4, sessionLength: 40},
    {day: 5, sessionLength: 30},
    {day: 6, sessionLength: 20},
    {day: 7, sessionLength: 10}]
  }
}
LineCharts.propTypes = {
  avgSession: PropTypes.object.isRequired
}





CustomCursor.defaultProps = {
  id: 0,
  keyData: {},
  score: 0,
  userInfos: {},
}
CustomCursor.propTypes = {
  id: PropTypes.number.isRequired,
  keyData: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  userInfos: PropTypes.object.isRequired,
}





CustomToolTip.defaultProps = {
  active: false,
  payload: []
}
CustomToolTip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired
}


export default LineCharts
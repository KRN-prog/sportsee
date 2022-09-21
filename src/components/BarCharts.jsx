import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const renderLegend = (props) => {
  console.log(props.payload)
  /*for (let i = 0; i < props.payload.length; i++) {
    switch (props.payload[i].color) {
      case "#282D30":
        console.log("eeee")
        break;


      case "#E60000":
        console.log("dddd")
        break;
    
      default:
        break;
    }
  }*/
  return (
    <div className="ChartText">
      <span className="ChartText__title">Activité quotidienne</span>
      {
        props.payload.map((entry, index) => (
          <div className="valueBox" key={`legend-item-${index}`}>
            <span className={"color"+entry.color.replace('#','')}></span>
            <span>{entry.value} {entry === "Poids" ? ("(kg)") : ("(kCal)")}</span>
          </div>
        ))
      }
    </div>
  );
}
function CustomToolTip({ active, payload }) {
  if(active){
    return(
      <React.Fragment>
        <div className="tooltipBar">{payload[0].payload.Poids}Kg</div>
        <div className="tooltipBar">{payload[0].payload.Calories}Kcal</div>
      </React.Fragment>
    )
  }
  return null
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
    <ResponsiveContainer width="100%" className="barChartsContainer">
      <BarChart data={data} >
        <CartesianGrid vertical={false} strokeDasharray="1" />
        <XAxis dataKey="name" tickLine={false} dy={15}/>
        <YAxis orientation="right" axisLine={false} tickLine={false} dx={15} />
        <Tooltip content={<CustomToolTip  />}/>
        <Legend verticalAlign="top" align="end" height={50} margin={{ top: 0, left: 0, right: 0, bottom: 0 }} content={renderLegend}/>
        <Bar dataKey="Poids" fill="#282D30" barSize={10} radius={[100, 100, 0, 0]}/>
        <Bar dataKey="Calories" fill="#E60000" barSize={10} radius={[100, 100, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarCharts
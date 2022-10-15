import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

/**
 * This function will create a custom lengend to put it on the top of the chrt with a custom shape for the legend color and indicator for Poids and Calories
 * 
 * 
 * @param {Object} prop Object that contain the data link to the legend (align,height,layout,...) but the most  important it contain "payload" which is used to display the color of the legend,
 * the title and the indicator "kg" or "kCal"
 * 
 * @returns {Object} Returning the custom legend of the chart
 */
function renderLegend ( prop ) {
  return (
    <div className="ChartText">
      <span className="ChartText__title">Activité quotidienne</span>
      {
        prop.payload.map((entry, index) => (
          <div className="valueBox" key={`legend-item-${index}`}>
            <span className={"color"+entry.color.replace('#','')}></span>
            <span>{entry.value} {entry.value === "Poids" ? ("(kg)") : ("(kCal)")}</span>
          </div>
        ))
      }
    </div>
  );
}

/**
 * This function will create a custom tooltip when you hovering an element of the chart, that contain the weight in "kg" and the number of "kCal" burned
 * 
 * 
 * @param {Boolean} active Boolean to show if a chart element is hovering
 * @param {Array} payload Array that containing two objects that containing the data of the element that is being hovering
 * @returns {Object} Returning the custom tooltip when you hovering an element of the chart
 */
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

/**
 * This function will create a Bar chart element with the sessions activity of the user
 * 
 * 
 * @param {Object} props Object containing the data of the activity of the user
 * @returns {Object} Returning Bar chart element
 */
function BarCharts( props ) {
  const data =
  props.activity.sessions.map(donnees => (
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

BarCharts.defaultProps = {
  activity: {
    userId: 0,
    sessions: [
      {day: '2020-01-01', kilogram:50, calories: 50},
      {day: '2020-01-02', kilogram:50, calories: 50},
      {day: '2020-01-03', kilogram:50, calories: 50},
      {day: '2020-01-04', kilogram:50, calories: 50},
      {day: '2020-01-05', kilogram:50, calories: 50},
      {day: '2020-01-06', kilogram:50, calories: 50},
      {day: '2020-01-07', kilogram:50, calories: 50},
    ]
  }
}
BarCharts.propTypes = {
  activity: PropTypes.object.isRequired
}




CustomToolTip.defaultProps = {
  active: false,
  payload: []
}
CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}




renderLegend.defaultProps = {
  payload: [{}]
}
renderLegend.propTypes = {
  payload: PropTypes.array.isRequired
}


export default BarCharts
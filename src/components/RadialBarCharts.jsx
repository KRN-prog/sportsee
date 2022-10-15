import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";


/**
 * This function will create a Radial chart element with the score of the user
 * 
 * @param {Object} props Object containing the score of the user
 * @returns {Object} Returning Radial chart element
 */
function RadialChart( props ) {
  console.log(props)
  let getScore = props.score.toString()
  let resizeScore = getScore * 100
  const data = [
    {
      name: "today",
      score: resizeScore,
      fill: "red"
    }
  ]
  return (
    <div className="chartBox">
      <ResponsiveContainer width="100%">
        <RadialBarChart cx="50%" cy="55%" width="100%" height="100%" style={{ backgroundColor: '#FBFBFB' }} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} innerRadius="80%" outerRadius="80%" data={data} startAngle={210} endAngle={-30}>
          <circle cx="50%" cy="50%" fill="#fbfbfb" r={90}></circle>
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={1} tick={false}/>
          <RadialBar background dataKey="score" angleAxisId={1} fill="#E60000" cornerRadius={10} data={data} barSize={10}/>
          <text fontWeight="700" fontSize="1.65em" fill="#282D30" x="50%" y="51%" textAnchor="middle" >{`${data[0].score}%`}</text>
          <text fontWeight="500" fontSize="1em" fill="#74798C" x="50%" y="60%" textAnchor="middle">de votre</text>
          <text fontWeight="500" fontSize="1em" fill="#74798C" x="50%" y="68%" textAnchor="middle">objectif</text>
          <text x="12%" y="17%" textAnchor="start" dominantBaseline="middle" fill="#20253A" style={{ fontWeight: 500, fontSize: '1em' }}>Score{' '}</text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}


RadialChart.defaultProps = {
  score: 0
}
RadialChart.propTypes = {
  score: PropTypes.number.isRequired
}

export default RadialChart
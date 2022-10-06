import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

function Chart( props ) {
  const data =
  props.perf.data.map(donnees => (
    {
      subject: props.perf.kind[donnees.kind],
      A: donnees.value,
      B:donnees.value,
      fullMark: donnees.value*2
    }
  ))
  return (
    <div className="chartBox">
      <ResponsiveContainer width="100%" className="radarBox">
        <RadarChart data={data}>
          <PolarGrid gridType="polygon" polarRadius={[15, 40, 60, 80, 100]} stroke="#fff" radialLines={false}/>
          <PolarAngleAxis dataKey="subject" tick={{fill: '#fff'}} />
          <Radar dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

Chart.defaultProps = {
  perf: {
    userId: 0,
    kind: {1: "cardio",2: "energy",3: "endurance",4: "strength",5: "speed",6: "intensity"},
    data: [{value: 200, kind: 1},{value: 200, kind: 2},{value: 200, kind: 3},{value: 200, kind: 4},{value: 200, kind: 5},{value: 200, kind: 6}]
  }
}
Chart.propTypes = {
  perf: PropTypes.object.isRequired
}

export default Chart
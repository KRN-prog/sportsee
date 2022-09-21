import React from "react";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

function Chart( userPerfData ) {
  const data =
  userPerfData.perf.data.map(donnees => (
    {
      subject: userPerfData.perf.kind[donnees.kind],
      A: donnees.value,
      B:donnees.value,
      fullMark: donnees.value *2
    }
  ))
  return (
    <ResponsiveContainer width="25%" height={263} className="radarBox">
      <RadarChart data={data}>
        <PolarGrid gridType="polygon" polarRadius={[15, 40, 60, 80, 100]} stroke="#fff" radialLines={false}/>
        <PolarAngleAxis dataKey="subject" tick={{fill: '#fff'}} />
        <Radar dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default Chart
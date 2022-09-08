import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

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
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar /*name="Mike"*/ dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default Chart
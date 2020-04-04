import React from "react";
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryLegend,
  VictoryAxis
} from "victory";

import { Card, CardContent } from "@material-ui/core";

export default function(props) {
  const { data, title, xLabel } = props;
  const dataPoints = Object.entries(data).map(([_, obj]) => obj);
  const legends = dataPoints.map(({ legend, style: { fill } }) => ({
    name: legend,
    symbol: { fill }
  }));
  const xCategories = dataPoints[0].data.map(({ x }) => x);

  return (
    <Card raised={true} style={{ padding: 25 }}>
      <CardContent>
        <VictoryChart domainPadding={{ x: 30, y: 20 }}>
          <VictoryLegend
            x={80}
            y={0}
            data={legends}
            title={title}
            centerTitle
            orientation="horizontal"
            gutter={10}
            style={{ labels: { fontSize: 8 } }}
          />
          <VictoryStack>
            {dataPoints.map((area, i) => (
              <VictoryBar
                style={{ data: area.style }}
                data={area.data}
                key={i}
              ></VictoryBar>
            ))}
          </VictoryStack>
          <VictoryAxis dependentAxis tickFormat={tick => `${tick}%`} />
          <VictoryAxis label={xLabel} tickFormat={xCategories} />
        </VictoryChart>
      </CardContent>
    </Card>
  );
}

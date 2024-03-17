import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { SouthKoreaSvgMap } from "./SouthKoreaSvgMap";

type MapDataType = { [Area: string]: number };

interface ITooltipStyle {
  display: string;
  top?: number;
  left?: number;
}

const DefaultTooltip = styled.div<ITooltipStyle>`
  border-radius: 10px;
  color: #41444a;
  position: fixed;
  min-width: 80px;
  padding: 10px;
  background-color: ${(props) => props.theme.blueColor};
  border: 1px solid ${(props) => props.theme.textColor};
  display: ${(props) => props.display};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export const SimpleSouthKoreaMapChart = ({ data, setColorByCount }: any) => {
  const [mapData, setMapData] = useState<MapDataType>({});
  const [tooltipMsg, setTooltipMsg] = useState<string>("");
  const [tooltipStyle, setTooltipStyle] = useState<ITooltipStyle>({
    display: "none",
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const items = data.reduce((acc: any, item: any) => {
      return {
        ...acc,
        [item.locale]: item.count,
      };
    }, {});

    setMapData(items);
  }, [data]);

  const handleAreaMouseOver = (event: any) => {
    const area = event.target.attributes.name.value;
    const count = mapData[area] ? mapData[area] : 0;
    setTooltipMsg(`${area}: ${count}`);
  };

  const handleAreaMouseOut = () => {
    setTooltipStyle({ display: "none" });
  };

  const handleAreaMouseMove = (event: any) => {
    const tooltipStyle = {
      display: "block",
      top: event.clientY - 50,
      left: event.clientX - 60,
    };
    setTooltipStyle(tooltipStyle);
  };

  return (
    <>
      <SouthKoreaSvgMap
        data={mapData}
        setColorByCount={setColorByCount}
        onAreaMouseOver={handleAreaMouseOver}
        onAreaMouseOut={handleAreaMouseOut}
        onAreaMouseMove={handleAreaMouseMove}
      />
      <DefaultTooltip {...tooltipStyle}>{tooltipMsg}</DefaultTooltip>
    </>
  );
};

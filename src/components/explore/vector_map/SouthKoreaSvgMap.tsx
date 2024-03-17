import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import mapData from "./mapData";

const SvgMap = styled.svg`
  width: 100%;
  height: 600px;
  stroke: #777;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  :hover {
    outline: 0;
  }
  :focus {
    outline: 0;
  }
  cursor: pointer;
`;

export const SouthKoreaSvgMap = (props: any) => {
  return (
    <SvgMap xmlns="http://www.w3.org/2000/svg" viewBox={mapData.viewBox}>
      {props.childrenBefore}
      {mapData.areas.map((area) => {
        let count = props.data[area.eng_name];
        if (!count) {
          count = 0;
        }
        return (
          <path
            id={area.id}
            name={area.eng_name}
            d={area.path}
            onMouseOver={props.onAreaMouseOver}
            onMouseOut={props.onAreaMouseOut}
            onMouseMove={props.onAreaMouseMove}
            onClick={props.onAreaClick}
            onKeyDown={props.onAreaKeyDown}
            onFocus={props.onAreaFocus}
            onBlur={props.onAreaBlur}
            key={area.id}
            fill={props.setColorByCount(count)}
          />
        );
      })}
      {props.childrenAfter}
    </SvgMap>
  );
};

SouthKoreaSvgMap.propTypes = {
  data: PropTypes.any,
  setColorByCount: PropTypes.func,

  // Areas properties
  onAreaMouseOver: PropTypes.func,
  onAreaMouseOut: PropTypes.func,
  onAreaMouseMove: PropTypes.func,
  onAreaClick: PropTypes.func,
  onAreaKeyDown: PropTypes.func,
  onAreaFocus: PropTypes.func,
  onAreaBlur: PropTypes.func,
  isAreaSelected: PropTypes.func,

  // Slots
  childrenBefore: PropTypes.node,
  childrenAfter: PropTypes.node,
};

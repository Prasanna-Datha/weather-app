import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.div`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;

  const TempCond = styled.div`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp>{temp} °C</Temp>
      <TempCond>{condition}</TempCond>
    </>
  );
};

export default Condition;

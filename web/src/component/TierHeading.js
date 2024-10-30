import styled from "styled-components";

const TierHeadingContainer = styled.div`
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  height: 100px;
`;
function TierHeading({ letter, color }) {
  return (
    <TierHeadingContainer style={{ backgroundColor: color }}>
      {letter}
    </TierHeadingContainer>
  );
}

export default TierHeading;
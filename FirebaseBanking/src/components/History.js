import React from "react";
import styled from "styled-components";
function History(props) {
  const { data } = props;

  return (
    <>
      <Wrapper>
        <div className="balance">
          <div className="balance__details">
            <h1>Added Money</h1>
            <h1>{data.length > 0 ? data[0].add : ""}</h1>
          </div>
          <div className="balance__details">
            <h1>Remove Money</h1>
            <h1>{data.length > 0 ? data[0].remove : ""}</h1>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .balance {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 500px;
    row-gap: 40px;
    padding: 20px;
  }
  .balance__details {
    text-align: center;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    h1 {
      font-size: 36px;
      color: black;
    }
  }
`;
export default History;

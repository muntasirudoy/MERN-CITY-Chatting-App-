import React, { useEffect } from "react";
import "./App.css";
import History from "./components/History";
import Transaction from "./components/Transaction";
import styled from "styled-components";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./config";

function App() {
  const [amount, setAmount] = React.useState(0);
  const [data, setData] = React.useState("");
  const [total, setTotal] = React.useState("");

  //info just trying

  const [add, setAdd] = React.useState(0);

  let address = collection(db, "transaction");
  useEffect(() => {
    let storedUser = async () => {
      let newAmount = await getDocs(address);
      let AmountArray = newAmount.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setData(AmountArray);
    };
    storedUser();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="main">
            <div className="transaction">
              <Transaction amount={amount} setAmount={setAmount} data={data} />
            </div>
            <div className="output">
              <div className="output__heading">
                <h1>Total Money</h1>
              </div>
              <div className="output__result">
                <h1>{data.length > 0 ? data[0].total : 0}</h1>
              </div>
            </div>
            <div className="history">
              <History data={data} />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .main {
    display: flex;
    justify-content: space-between;
    background: #6471eb !important;
    padding: 20px;
    height: 500px;

    .output {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
`;
export default App;

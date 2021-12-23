import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../config";
function Transaction(props) {
  let address = collection(db, "transaction");
  const { amount, setAmount, data } = props;

  const [balance, setBalance] = useState(0);

  const sendData = async (e) => {
    e.preventDefault();

    if (data.length > 0) {
      let newtotal = parseInt(data[0].total);
      let newAmount = parseInt(amount) + parseInt(newtotal);

      let id = data[0].id;
      let newRemove = data[0].remove;
      let newAddress = doc(db, "transaction", id);
      await updateDoc(newAddress, {
        total: newAmount,
        add: amount,
        remove: newRemove,
      });
    } else {
      return await addDoc(address, {
        total: parseFloat(amount),
        add: parseFloat(amount),
        remove: parseFloat(0),
      });
    }
  };

  const removeData = async (e) => {
    e.preventDefault();

    if (data.length > 0) {
      let newtotal = parseInt(data[0].total);
      let newAmount = parseInt(newtotal) - parseInt(amount);

      let id = data[0].id;
      let newAddress = doc(db, "transaction", id);
      await updateDoc(newAddress, {
        total: parseFloat(newAmount),
        remove: parseFloat(amount),
      });
    } else {
      window.alert("CANNOT DELETE lol");
    }
  };

  return (
    <>
      <Wrapper>
        <div className="transaction">
          <div className="transaction__add">
            <div className="heading">
              <h1>Add Money</h1>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="amount"
                className="amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="submit">
              <button type="submit" onClick={sendData} className="submit__btn">
                Add
              </button>
            </div>
          </div>
          <div className="transaction__delete">
            <div className="heading">
              <h1>Remove Money</h1>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="amount"
                onChange={(e) => setAmount(e.target.value)}
                className="amount"
              />
            </div>
            <div className="submit">
              <button
                type="submit"
                onClick={removeData}
                className="submit__btn"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .transaction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    row-gap: 40px;
    padding: 20px;
  }
  h1 {
    font-size: 36px;
    color: white;
  }
  .amount {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    height: 55px;
    background: var(--blue);
    width: 279px;
  }

  .submit__btn {
    background: #ffffff;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    width: 279px;
    height: 55px;
    margin-top: 10px;
  }
`;
export default Transaction;

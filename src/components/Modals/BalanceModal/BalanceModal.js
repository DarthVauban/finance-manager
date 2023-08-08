import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";
import DatePicker from "react-date-picker";
import TextInput from "@/components/Inputs/TextInput";
import Modal from "../Modal";
import BaseTitle from "@/components/shared/BaseTitle";
import { createBalance, getBalance } from "@/store/BalancesSlice";
import "./BalanceModal.scss";

const options = [
  { value: "Credit Card", label: "Credit Card" },
  { value: "Checking", label: "Checking" },
  { value: "Savings", label: "Savings" },
  { value: "Investment", label: "Investment" },
  { value: "Loan", label: "Loan" },
];

const BalanceModal = ({ isOpen, onClose }) => {
  const [balance, setbalance] = useState({
    bankName: "",
    branchName: "",
    accountType: "",
    accountNumber: "",
    balanceAmount: "",
  });
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const create = e => {
    e.preventDefault();
    const newBalance = { ...balance, userId: user.id, id: uuidv4() };
    dispatch(createBalance(newBalance));
    dispatch(getBalance(user.id));
    onClose();
    setbalance({
      bankName: "",
      branchName: "",
      accountType: "",
      accountNumber: "",
      balanceAmount: "",
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="transaction-modal"
    >
      <BaseTitle
        text={"Create Balance"}
        fontSize={"22"}
      />

      <form
        className="transaction-modal__form"
        onSubmit={create}
      >
        <div className="input-wrapper">
          <label htmlFor="">Bank Name</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setbalance({ ...balance, bankName: value });
            }}
            value={balance.bankName}
            placeholder="Enter Bank Name"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Branch Name</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setbalance({ ...balance, branchName: value });
            }}
            value={balance.branchName}
            placeholder="Enter Branch Name"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Account type</label>
          <Select
            options={options}
            onChange={item => {
              setbalance({ ...balance, accountType: item.value });
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Account Number</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setbalance({ ...balance, accountNumber: value });
            }}
            value={balance.accountNumber}
            placeholder="Enter Account Number"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Balance</label>
          <TextInput
            onChange={({ target: { value } }) => {
              setbalance({ ...balance, balanceAmount: value });
            }}
            value={balance.balanceAmount}
            placeholder="Enter Balance"
          />
        </div>
        <br />
        <button className="transaction-modal__button-create">
          Create Balance
        </button>
      </form>
    </Modal>
  );
};

export default BalanceModal;

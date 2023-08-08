import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import BalanceCard from "@/components/BalanceCard";
import AddAccount from "@/components/AddAccount";
import BaseTitle from "@/components/shared/BaseTitle";
import "./Balances.scss";
import BalanceModal from "@/components/Modals/BalanceModal";
import { getBalance, deleteBalance } from "@/store/BalancesSlice";

export const Balances = () => {
  const [isOpenBalanceModal, setIsOpenBalanceModal] = useState(false);
  const { balances, loading } = useSelector(state => state.balances);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBalance(user.id));
  }, [user]);

  const remove = id => {
    dispatch(deleteBalance(id));
  };

  return (
    <MainLayout>
      <BaseTitle
        text={"Balances"}
        fontSize="22"
        classes="balances-title"
      />
      <div className="flex">
        {balances.map(b => {
          return (
            <BalanceCard
              {...b}
              key={b.id}
              deleteCard={remove}
            />
          );
        })}
        <AddAccount onClick={() => setIsOpenBalanceModal(true)} />
      </div>
      <BalanceModal
        isOpen={isOpenBalanceModal}
        onClose={() => setIsOpenBalanceModal(false)}
      />
    </MainLayout>
  );
};

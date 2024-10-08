import React, { createContext, useState, useEffect } from 'react';
import  db  from '../../firebase'; 
import { ref, push, remove, update, onValue } from 'firebase/database';

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesRef = ref(db, 'expenses');
    const unsubscribe = onValue(expensesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const expenseList = Object.keys(data).map((id) => ({ id, ...data[id] }));
      setExpenses(expenseList);
    });

    return () => unsubscribe(); 
  }, []);

  const addExpense = async (expense) => {
    try {
      const expensesRef = ref(db, 'expenses');
      await push(expensesRef, expense);
    } catch (error) {
      console.error("Error adding expense:", error);
      throw error;
    }
  };

  const removeExpense = async (id) => {
    try {
      const expenseRef = ref(db, `expenses/${id}`);
      await remove(expenseRef);
    } catch (error) {
      console.error("Error removing expense:", error);
      throw error;
    }
  };

  const editExpense = async (id, updatedExpense) => {
    try {
      const expenseRef = ref(db, `expenses/${id}`);
      await update(expenseRef, updatedExpense);
    } catch (error) {
      console.error("Error updating expense:", error);
      throw error;
    }
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense, editExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseProvider };

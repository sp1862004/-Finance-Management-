import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ExpenseContext } from '../context/ExpenseContext';
import 'animate.css/animate.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ExpenseForm = () => {
  const { addExpense, editExpense, expenses } = useContext(ExpenseContext);
  const [form, setForm] = useState({
    amount: '',
    description: '',
    date: '',
    category: '',
    paymentMethod: 'cash',
  });

  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const expenseToEdit = expenses.find((expense) => expense.id === id);
      if (expenseToEdit) {
        setForm(expenseToEdit);
      }
    }
  }, [id, expenses]);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.amount || isNaN(form.amount)) {
      alert('Please enter a valid amount');
      return;
    }
    if (!form.date) {
      alert('Please select a valid date');
      return;
    }

    try {
      if (id) {
        await editExpense(id, form);
        alert('Expense updated successfully!');
      } else {
        await addExpense(form);
        alert('Expense added successfully!');
      }
      navigate('/view'); 
    } catch (error) {
      alert('Error saving expense. Please try again.');
    }

    setForm({
      amount: '',
      description: '',
      date: '',
      category: '',
      paymentMethod: 'cash',
    });
  };

  return (
    <div className="container mt-4 border p-5 mt-5 mb-5 bg-info rounded">
      <h2 className="text-center mb-4">{id ? 'Edit Expense' : 'Add Expense'}</h2>
      <form onSubmit={handleSubmit} className="expense-form animate__animated animate__fadeIn mt-3">
        <div className="mb-3">
          <label className="form-label"><b>Amount</b></label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"><b>Description</b></label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"><b>Date</b></label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"><b>Category</b></label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label"><b>Payment Method</b></label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;

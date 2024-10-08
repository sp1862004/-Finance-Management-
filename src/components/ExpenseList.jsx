import React, { useContext, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { ExpenseContext } from '../context/ExpenseContext';
import 'animate.css/animate.min.css'; 

const ExpenseList = () => {
  const { expenses, removeExpense } = useContext(ExpenseContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const expensesPerPage = 5;

  const navigate = useNavigate();

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearchTerm = expense.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                               expense.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? expense.category === categoryFilter : true;

    return matchesSearchTerm && matchesCategory;
  });

  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = filteredExpenses.slice(indexOfFirstExpense, indexOfLastExpense);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredExpenses.length / expensesPerPage)));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="expense-list-container mb-5 mt-5 container animate__animated animate__fadeIn">
      <h2 className="text-center mb-5">Expense List</h2>

      {/* Search and Filter Section */}
      <div className="search-filter-section row mb-5">
        <div className="col-md-6">
          <input 
            type="text" 
            placeholder="Search by description or category" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)} 
            className="form-control"
          >
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
      </div>

      {/* Expense Table */}
      {filteredExpenses.length > 0 ? (
        <table className="table table-striped table-hover animate__animated animate__fadeInUp">
          <thead className="table-dark">
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentExpenses.map((expense) => (
              <tr key={expense.id} className="animate__animated animate__fadeIn">
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>{expense.paymentMethod}</td>
                <td>
                  <button 
                    onClick={() => navigate(`/edit-expense/${expense.id}`)} 
                    className="btn btn-warning mx-2  animate__animated animate__fadeInUp"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button 
                    onClick={() => {
                      removeExpense(expense.id);
                    }} 
                    className="btn btn-danger mx-2 mt-1 animate__animated animate__fadeInUp"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No expenses found. Add some!</p>
      )}

      {/* Pagination */}
      <div className="pagination d-flex justify-content-center mt-4">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1} 
          className="btn btn-info mx-2 animate__animated animate__fadeIn"
        >
          Previous
        </button>
        <button 
          onClick={nextPage} 
          disabled={indexOfLastExpense >= filteredExpenses.length} 
          className="btn btn-info animate__animated animate__fadeIn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExpenseList;

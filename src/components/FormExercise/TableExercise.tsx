import React, { useState } from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  deleteFunction: (id: number) => void;
}

function TableExercise({ expenses, deleteFunction }: Props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Categoria</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteFunction(expense.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${expenses.reduce((acc, expense) => acc + expense.amount, 0)}
            </td>
            <td>Todas</td>
            <td>#</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default TableExercise;

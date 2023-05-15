import { useState } from "react";
import reactLogo from "./assets/react.svg";
import FormExercise from "./components/FormExercise/FormExercise";
import TableExercise from "./components/FormExercise/TableExercise";
import FilterExercise from "./components/FormExercise/FilterExercise";


interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export const categories = ["Bebida", "Roupa", "Comida"] as const;

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Batata",
      amount: 12,
      category: "Comida",
    },
    {
      id: 2,
      description: "Coca",
      amount: 5,
      category: "Bebida",
    },
    {
      id: 3,
      description: "Jaqueta",
      amount: 50,
      category: "Roupa",
    },
  ] as any);

  const [filteredExpenses, setFilteredExpenses] = useState("");

  function deleteExpense(id: number): void {
    setExpenses(expenses.filter((expense: Expense) => expense.id != id));
  }

  const visibleExpenses = filteredExpenses
    ? expenses.filter((e : any) => e.category === filteredExpenses)
    : expenses;

  return (
    // <Form></Form>
    // <FormWithLib></FormWithLib>
    <>
      <FormExercise
        expenses={expenses}
        setExpenses={setExpenses}
        categories={categories}
      ></FormExercise>
      <TableExercise
        expenses={visibleExpenses}
        deleteFunction={deleteExpense}
      ></TableExercise>
      <FilterExercise
        selectCategory={setFilteredExpenses}
        categories={categories}
      ></FilterExercise>
    </>
  );
}

export default App;

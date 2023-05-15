import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from '../../App'

const schema = z.object({
  description: z
    .string()
    .nonempty({ message: "Descrição é obrigatória." })
    .min(3, { message: "A descrição deve ter no mínimo 3 letras." }),
  amount: z.number({
    invalid_type_error: "Valor é obrigatório e deve ser um número.",
  }),
  category: z
    .string()
});

type FormData = z.infer<typeof schema>;

interface Props {
  expenses: any[];
  setExpenses: (value: any) => void;
  categories: string[];
}

function FormExercise({ expenses, setExpenses, categories }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: FieldValues) {
    data = {...data, id: expenses.length + 1}
    setExpenses([...expenses, data]);
    console.log(expenses);
    
  }

  return (
    <form onSubmit={handleSubmit((data) => {
        onSubmit(data)
        reset();
      }
      )}>
      {/* ------------------------DESCRIÇÃO-------------------- */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descrição
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      {/* ---------------------------------------- */}

      {/* -----------------------VALOR----------------- */}

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Valor
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
      </div>
      {errors.amount && <p>{errors.amount.message}</p>}

      {/* ---------------------------------------- */}

      {/* -----------------------CATEGORIA----------------- */}

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Categoria
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          {categories.map((categories) => (
            <option value={categories}>{categories}</option>
          ))}
        </select>
      </div>
      {errors.category && <p>{errors.category.message}</p>}

      {/* ---------------------------------------- */}

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormExercise;

import React from 'react'

interface Props{
    expenses: any[],
    selectCategory: (category: string) => void,
    categories: string[]
}

function FilterExercise({ expenses, selectCategory, categories }: Props) {

  return (
    <select onChange={(event) => selectCategory(event.target.value)}>
        <option value="Todas">Todas</option>
        {categories.map( categories => <option value={categories}>{categories}</option>)}
    </select>
  )
}

export default FilterExercise
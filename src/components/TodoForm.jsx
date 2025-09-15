import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
        <h2>Adicionar Tarefa</h2>
        <form>
            <input type="text" placeholder="Digite a titulo" />
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    </div>
  )
}

export default TodoForm

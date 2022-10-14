import { useState } from 'react';

export const AddCategory = ({addCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if(inputValue.trim().length > 0){

      addCategory(inputValue.trim());

      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type='text'
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  )
}

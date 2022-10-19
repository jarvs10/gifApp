import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {
    if(categories.includes(value)){
      console.log('el valor ya existe');

      return;

    } else {
      setCategories([value, ...categories]);
    }
  }

  return (
    <>
      {/* title */}
      <h1>Buscador de Gifs</h1>

      {/* Agrega una categoria desde el input */}
      <AddCategory addCategory={onAddCategory} />

      {/* itera sobre el arreglo y me muestra el HTML */}
      {categories.map(category => {
        return (
          <GifGrid 
            key={category}
            category={category}
          />
        )
      })}
    </>
  )
}

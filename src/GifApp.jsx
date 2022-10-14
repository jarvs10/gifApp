import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

  const [categories, setCategories] = useState(['Bleach', 'Death Note']);

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
      <h1>GifExportApp</h1>

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

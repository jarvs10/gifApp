import { getGifs } from "../helpers/getGifs";
import { useState, useEffect }from 'react'
import { GigItem } from "./GigItem";

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, [])
  
  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => {
          return (
            <GigItem
              key={image.id}
              {...image}
            />
          )
        })}
      </div>
    </>
  )
}

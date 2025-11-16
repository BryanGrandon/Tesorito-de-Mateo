import { useStore } from '@nanostores/react'
import { selectImage } from '../../../utilities/storage/dynamic-page'
import { useEffect, useState } from 'react'

type gallery = {
  imgDefault: ''
  images: {
    url: string
    size: string
  }[]
}

const Gallery = ({ imgDefault, images }: gallery) => {
  const [img, setImg] = useState<string>(imgDefault == '' ? images[0].url : imgDefault)
  const selectImg = (url: string) => setImg(url)

  const type = useStore(selectImage)

  const applyImage = () => {
    if (type == '') return
    for (let i = 0; i < images.length; i++) {
      if (type == images[i].size) setImg(images[i].url)
    }
  }
  useEffect(() => {
    applyImage()
  }, [type])

  const allImages = imgDefault == '' ? [...images] : [{ url: imgDefault, size: 'box' }, ...images]

  return (
    <article className='flex flex-col-reverse sm:flex-row justify-center'>
      <div className='flex flex-row sm:flex-col gap-4 mt-4 sm:mt-0 sm:mr-4 items-center flex-wrap'>
        {allImages.map((el) => (
          <img
            src={el.url}
            key={el.size}
            alt={`img-${el.size}`}
            onClick={() => selectImg(el.url)}
            className='h-17 sm:h-20 rounded-lg shadow-md shadow-black/30 cursor-pointer hover:scale-105 transition-transform duration-200'
          />
        ))}
      </div>

      <img src={img} alt='' className='max-h-100 max-w-100 rounded-2xl shadow-lg shadow-black/40' />
    </article>
  )
}

export default Gallery

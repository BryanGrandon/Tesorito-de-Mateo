import { useEffect, useState } from 'react'
import { selectImage } from '../../../utilities/storage/dynamic-page'

type Props = {
  prices: { size: string; price: string }[]
}

const PriceOfPerfumes = ({ prices }: Props) => {
  const [price, setPrice] = useState<string>('')
  const [selectSize, setSelectSize] = useState<string>('')

  const firstPrice = prices[0].price
  const lastPrice = prices.at(-1)?.price

  useEffect(() => {
    firstPrice === lastPrice ? setPrice(`$${firstPrice}`) : setPrice(`Precios desde $${lastPrice} hasta $${firstPrice}`)
  }, [])

  const selectPrice = (price: string, size: string) => {
    setPrice(`$${price}`)
    selectImage.set(size)

    const $btn1 = document.querySelector(`.btn-${selectSize}`)
    $btn1?.classList.remove('bg-primary')
    $btn1?.classList.remove('text-white')

    setSelectSize(size)
    const $btn = document.querySelector(`.btn-${size}`)
    $btn?.classList.add('bg-primary')
    $btn?.classList.add('text-white')
  }

  return (
    <div>
      <p className='font-basicaline font-bold text-2xl my-2'>{price}</p>

      <sub>
        <p className='text-sm'>Tamaños disponibles</p>
      </sub>
      <section className='flex gap-2 my-4'>
        {prices.map(({ size, price }) => (
          <p key={size} className={`border border-black/40 shadow shadow-gray-400 rounded-lg w-20 text-center cursor-pointer btn-${size}`} onClick={() => selectPrice(price, size)}>
            {size}
          </p>
        ))}
      </section>
    </div>
  )
}

export default PriceOfPerfumes

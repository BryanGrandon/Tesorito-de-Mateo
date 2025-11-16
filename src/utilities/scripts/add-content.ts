import { PERFUMES_IMG } from '../constants/images'

const addImageDefault = (type: string) => {
  if (type == 'F') return PERFUMES_IMG.women.box
  if (type == 'H') return PERFUMES_IMG.men.box
  if (type == 'QR') return PERFUMES_IMG.niche.red.box
  if (type == 'QB') return PERFUMES_IMG.niche.black.box
}

const addPriceSizeImg = (type: string) => {
  if (type == 'F' || type == 'H') {
    return [
      { size: '100ml', price: '15.000', url: type == 'F' ? PERFUMES_IMG.women['100ml'] : PERFUMES_IMG.men['100ml'] },
      { size: '50ml', price: '10.000', url: type == 'F' ? PERFUMES_IMG.women['50ml'] : PERFUMES_IMG.men['50ml'] },
      { size: '20ml', price: '5.000', url: type == 'F' ? PERFUMES_IMG.women['20ml'] : PERFUMES_IMG.men['20ml'] },
    ]
  }
  if (type == 'QR' || type == 'QB') {
    return [{ size: '100ml', price: '25.000', url: type == 'QR' ? PERFUMES_IMG.niche.red['100ml'] : PERFUMES_IMG.niche.black['100ml'] }]
  }
}

type add_price_size = {
  arr: { img: string; size: string; price: string }[]
  size: string
  price: string
}

const addPriceSize = ({ arr, size, price }: add_price_size) => {
  arr.map((el) => {
    el.size = size
    el.price = price
  })
  return arr
}

export { addImageDefault, addPriceSizeImg, addPriceSize }

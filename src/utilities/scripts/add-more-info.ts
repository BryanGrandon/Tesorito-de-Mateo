import { addImageDefault, addPriceSize, addPriceSizeImg } from './add-content'

type add_more_info = {
  items: any[]
  option?: string
  type: string
}

const addMoreInfo = ({ items, type, option }: add_more_info) => {
  if (type == 'perfumes') {
    items.map((el) => {
      switch (option) {
        case 'F':
          el.img = addImageDefault('F')
          el.productData = addPriceSizeImg('F')
          break
        case 'H':
          el.img = addImageDefault('H')
          el.productData = addPriceSizeImg('H')
          break
        case 'Q':
          const isRed = el.type == 'red'
          el.img = isRed ? addImageDefault('QR') : addImageDefault('QB')
          el.productData = isRed ? addPriceSizeImg('QR') : addPriceSizeImg('QB')
          break
        case 'J':
          el.productData = addPriceSize({ arr: el.productData, size: '50ml', price: '6.700' })
          break
      }
    })
    return items
  }
  if (type == 'creams') {
    items.map((el) => {
      if (el.brand == 'Lavit') el.productData = addPriceSize({ arr: el.productData, size: '50ml', price: '4.000' })
    })
    return items
  }

  return []
}

export { addMoreInfo }

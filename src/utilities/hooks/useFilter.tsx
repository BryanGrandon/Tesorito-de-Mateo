import { useStore } from '@nanostores/react'
import { dataFilter, dataSelected } from '../storage/storage-filter'
import { useState } from 'react'
import { getArea, getBrandReference, getBrands, getFamily, getGenres } from '../scripts/get-filter-option'

const useFilter = () => {
  const [newData, setNewData] = useState<any[]>([])
  const main = useStore(dataSelected)

  const filter = {
    setOption: (type: string, value: string) => {
      getNewData(type, value)
    },
    setData: (value: any[]) => {
      setNewData(value)
      dataFilter.set(value)
      dataSelected.set(value)
    },
  }

  const getNewData = (type: string, option: string) => {
    if (option == 'todos') {
      dataFilter.set(main)
      return
    }

    if (type == 'marca') dataFilter.set(main.filter((el) => el.brand == option))
    if (type == 'genero') dataFilter.set(main.filter((el) => el.genre == option))
    if (type == 'area') dataFilter.set(main.filter((el) => el.area.includes(option)))
    if (type == 'referencia de marcas') dataFilter.set(main.filter((el) => el.context.brand == option))
    if (type == 'familias olfativas') dataFilter.set(main.filter((el) => el.olfactory_families.includes(option)))
  }

  const getContentFilter = (data: any[], type: string) => {
    if (type == 'creams') {
      return [
        { type: 'marca', data: getBrands(data) },
        { type: 'area', data: getArea(data) },
      ]
    } else {
      return [
        { type: 'genero', data: getGenres(data) },
        { type: 'referencia de marcas', data: getBrandReference(data) },
        { type: 'familias olfativas', data: getFamily(data) },
      ]
    }
  }

  return { newData, filter, getContentFilter }
}

export default useFilter

//  const getNewData = (type: string, option: string) => {
//     if (option == 'todos') {
//       dataFilter.set(main)
//       return
//     }
//     if (type == 'genero') {
//       const newData = main.filter((el) => el.genre == option)
//       dataFilter.set(newData)
//     }
//     if (type == 'familias olfativas') {
//       const newData = main.filter((el) => el.olfactory_families.includes(option))
//       dataFilter.set(newData)
//     }
//     if (type == 'marca') {
//       const newData = main.filter((el) => el.brand == option)
//       dataFilter.set(newData)
//     }
//     if (type == 'referencia de marcas') {
//       const newData = main.filter((el) => el.context.brand == option)
//       dataFilter.set(newData)
//     }
//     if (type == 'area') {
//       const newData = main.filter((el) => el.area.includes(option))
//       dataFilter.set(newData)
//     }
//   }

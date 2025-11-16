import type { product_creams, product_perfumes } from '../types/product-data'

const getFamily = (data: product_perfumes[]) => {
  const newSet = new Set<string>()
  data.map((el) => el.olfactory_families.map((item: string) => newSet.add(item)))
  if (newSet.size > 2) newSet.add('todos')
  return [...newSet]
}

const getGenres = (data: product_perfumes[]) => {
  const newSet = new Set<string>()
  data.map((el) => newSet.add(el.genre))
  if (newSet.size > 2) newSet.add('todos')
  return [...newSet]
}

const getBrandReference = (data: product_creams[]) => {
  const newSet = new Set<string>()
  data.map((el) => newSet.add(el.context.brand))
  if (newSet.size > 2) newSet.add('todos')
  return [...newSet].sort()
}

// Creams

const getBrands = (data: product_creams[]) => {
  const newSet = new Set<string>()
  data.map((el) => newSet.add(el.brand))
  if (newSet.size > 2) newSet.add('todos')
  return [...newSet].sort()
}

const getArea = (data: product_creams[]) => {
  const newSet = new Set<string>()
  data.map((el) => el.area.map((item: string) => newSet.add(item)))
  if (newSet.size > 2) newSet.add('todos')
  return [...newSet].sort()
}

export { getFamily, getGenres, getBrands, getArea, getBrandReference }

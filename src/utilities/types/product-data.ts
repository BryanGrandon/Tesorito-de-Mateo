type product_creams = {
  id: number
  name: string
  brand: string
  area: string[]
  description: string
  context: { highlight: string; brand: string; type: string }
  productData: { size: string; url: string; price: string }[]
  img: string
  extra: { title: string; description: string }[]
}

type product_perfumes = {
  id: number
  name: string
  brand: string
  genre: string
  description: string
  olfactory_families: string[]
  context: { highlight: string; brand: string; type: string }
}

export type { product_creams, product_perfumes }

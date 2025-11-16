import { ALL_PERFUMES, AROMATIZADORES, COLOGNE, CREAMS, PERFUMES, PERSONAL_CARE } from './content'

const DYNAMIC_PAGE = [
  {
    category: 'perfumes-for-women',
    data: PERFUMES.women,
  },
  {
    category: 'perfumes-for-men',
    data: PERFUMES.men,
  },
  {
    category: 'perfumes-for-young-people',
    data: PERFUMES.youngPeople,
  },
  {
    category: 'niche-perfumes',
    data: PERFUMES.niche,
  },
  {
    category: 'all-perfumes',
    data: ALL_PERFUMES,
  },
  {
    category: 'creams',
    data: CREAMS,
  },
]

const createDynamicIdPerfumes = () => {
  let data = []
  const ids = ALL_PERFUMES.items.map((el) => el?.name.toLowerCase().split(' ').join('-'))

  for (let i = 0; i < ids.length; i++) {
    const regex = ids[i].match(/^(\w+)-([a-z])(\d{2})$/)[2]

    const newData = {
      category: regex == 'h' ? 'perfumes-for-men' : regex == 'f' ? 'perfumes-for-women' : regex == 'j' ? 'perfumes-for-young-people' : regex == 'q' ? 'niche-perfumes' : '',
      id: ids[i],
      data: ALL_PERFUMES.items[i],
    }
    data.push(newData)
  }
  return data
}

const createDynamicIdCreams = () => {
  let data = []
  const ids = CREAMS.items.map((el) => el?.name.toLowerCase().split(' ').join('-'))
  console.log(CREAMS)

  for (let i = 0; i < ids.length; i++) {
    const newData = {
      category: 'creams',
      id: ids[i],
      data: CREAMS.items[i],
    }
    data.push(newData)
  }
  return data
}

const createDynamicIdAllPerfumes = () => {
  let data = []
  const ids = ALL_PERFUMES.items.map((el) => el?.name.toLowerCase().split(' ').join('-'))

  for (let i = 0; i < ids.length; i++) {
    const newData = {
      category: 'all-perfumes',
      id: ids[i],
      data: ALL_PERFUMES.items[i],
    }
    data.push(newData)
  }
  return data
}

const IDS_PERFUMES = createDynamicIdPerfumes()
const IDS_ALL_PERFUMES = createDynamicIdAllPerfumes()
const IDS_CREAMS = createDynamicIdCreams()
const DYNAMIC_ID = [...IDS_PERFUMES, ...IDS_CREAMS, ...IDS_ALL_PERFUMES]

const DYNAMIC_LIST = [
  {
    list: 'personal-care',
    data: PERSONAL_CARE,
  },
  {
    list: 'cologne',
    data: COLOGNE,
  },
  {
    list: 'aromatizadores',
    data: AROMATIZADORES,
  },
]

export { DYNAMIC_PAGE, DYNAMIC_ID, DYNAMIC_LIST }

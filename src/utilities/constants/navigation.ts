const LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE = '/Tesorito-de-Mateo/perfumes-for-young-people'
const LINK_TO_PERFUMES_FOR_WOMEN = '/Tesorito-de-Mateo/perfumes-for-women'
const LINK_TO_PERFUMES_FOR_MEN = '/Tesorito-de-Mateo/perfumes-for-men'
const LINK_TO_NICHE_PERFUMES = '/Tesorito-de-Mateo/niche-perfumes'
const LINK_ALL_PERFUMES = '/Tesorito-de-Mateo/all-perfumes'

export { LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE, LINK_TO_PERFUMES_FOR_WOMEN, LINK_TO_PERFUMES_FOR_MEN, LINK_TO_NICHE_PERFUMES }

const NAVBAR = [
  {
    id: 1,
    nav: 'Inicio',
    name: 'Tesorito de Mateo',
    url: '/Tesorito-de-Mateo/',
  },
  {
    id: 2,
    nav: 'Perfumes',
    catalogs: [
      {
        name: 'Mujer',
        url: LINK_TO_PERFUMES_FOR_WOMEN,
      },
      {
        name: 'Hombre',
        url: LINK_TO_PERFUMES_FOR_MEN,
      },
      {
        name: 'Juveniles',
        url: LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE,
      },
      {
        name: 'Nicho',
        url: LINK_TO_NICHE_PERFUMES,
      },
      {
        name: 'Todos',
        url: LINK_ALL_PERFUMES,
      },
    ],
  },
  {
    id: 3,
    nav: 'Cremas',
    url: '/Tesorito-de-Mateo/creams',
  },
  {
    id: 4,
    nav: 'Colonias',
    url: '/Tesorito-de-Mateo/cologne',
  },
  {
    id: 5,
    nav: 'Cuidado Personal',
    url: '/Tesorito-de-Mateo/personal-care',
  },
  {
    id: 6,
    nav: 'Aromatizadores',
    url: '/Tesorito-de-Mateo/aromatizadores',
  },
]

export { NAVBAR }

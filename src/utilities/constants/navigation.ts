const LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE = '/Brisa-de-paz/perfumes-for-young-people'
const LINK_TO_PERFUMES_FOR_WOMEN = '/Brisa-de-paz/perfumes-for-women'
const LINK_TO_PERFUMES_FOR_MEN = '/Brisa-de-paz/perfumes-for-men'
const LINK_TO_NICHE_PERFUMES = '/Brisa-de-paz/niche-perfumes'
const LINK_ALL_PERFUMES = '/Brisa-de-paz/all-perfumes'

export { LINK_TO_PERFUMES_FOR_YOUNG_PEOPLE, LINK_TO_PERFUMES_FOR_WOMEN, LINK_TO_PERFUMES_FOR_MEN, LINK_TO_NICHE_PERFUMES }

const NAVBAR = [
  {
    id: 1,
    nav: 'Inicio',
    name: 'Brisa de Paz',
    url: '/Brisa-de-paz/',
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
    url: '/Brisa-de-paz/creams',
  },
  {
    id: 4,
    nav: 'Colonias',
    url: '/Brisa-de-paz/cologne',
  },
  {
    id: 5,
    nav: 'Cuidado Personal',
    url: '/Brisa-de-paz/personal-care',
  },
  {
    id: 6,
    nav: 'Aromatizadores',
    url: '/Brisa-de-paz/aromatizadores',
  },
]

export { NAVBAR }

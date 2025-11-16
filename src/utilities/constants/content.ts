import nichePerfumes from '../../content/perfumes/niche-perfumes.json'
import perfumesForMen from '../../content/perfumes/perfumes-for-men.json'
import perfumesForWomen from '../../content/perfumes/perfumes-for-women.json'
import perfumesForYoungPeople from '../../content/perfumes/perfumes-for-young-people.json'
import creams from '../../content/creams.json'
import cologne from '../../content/cologne.json'
import aromatizadores from '../../content/aromatizadores.json'
import personalCare from '../../content/personal-care.json'

import { addMoreInfo } from '../scripts/add-more-info'

const PERFUMES = {
  men: {
    title: perfumesForMen.title,
    paragraph: perfumesForMen.paragraph,
    items: addMoreInfo({ items: perfumesForMen.items, type: 'perfumes', option: 'H' }),
  },
  women: {
    title: perfumesForWomen.title,
    paragraph: perfumesForWomen.paragraph,
    items: addMoreInfo({ items: perfumesForWomen.items, type: 'perfumes', option: 'F' }),
  },
  niche: {
    title: nichePerfumes.title,
    paragraph: nichePerfumes.paragraph,
    items: addMoreInfo({ items: nichePerfumes.items, type: 'perfumes', option: 'Q' }),
  },
  youngPeople: {
    title: perfumesForYoungPeople.title,
    paragraph: perfumesForYoungPeople.paragraph,
    items: addMoreInfo({ items: perfumesForYoungPeople.items, type: 'perfumes', option: 'J' }),
  },
}
const ALL_PERFUMES = {
  title: 'Todos Los perfumes',
  paragraph: '',
  items: [...PERFUMES.men.items, ...PERFUMES.women.items, ...PERFUMES.niche.items, ...perfumesForYoungPeople.items],
}

const CREAMS = {
  title: creams.title,
  paragraph: creams.paragraph,
  items: addMoreInfo({ items: creams.items, type: 'creams', option: '' }),
}

const COLOGNE = {
  title: cologne.title,
  paragraph: cologne.paragraph,
  items: cologne.items,
}

const PERSONAL_CARE = {
  title: personalCare.title,
  paragraph: personalCare.paragraph,
  items: personalCare.items,
}

const AROMATIZADORES = {
  title: aromatizadores.title,
  paragraph: aromatizadores.paragraph,
  items: aromatizadores.items,
}

export { PERFUMES, ALL_PERFUMES, CREAMS, COLOGNE, PERSONAL_CARE, AROMATIZADORES }

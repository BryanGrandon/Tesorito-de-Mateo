import { useEffect } from 'react'
import useFilter from '../../../utilities/hooks/useFilter'

type Props = {
  data: any[]
  type: string
}

const Filter = ({ data, type }: Props) => {
  const { filter, getContentFilter } = useFilter()

  useEffect(() => {
    filter.setData(data)
  }, [])

  const content = getContentFilter(data, type)

  return (
    <aside style={{ gridArea: 'aside' }} className=' hidden md:flex text-black min-w-60 p-4 bg-white/40 border border-gray-400 rounded-r-3xl shadow-lg shadow-black/20  flex-col gap-2'>
      <h2 className='font-basicaline text-2xl tracking-wider'>Filter</h2>
      {content.map((el) => (
        <fieldset key={el.type} className='border rounded'>
          <legend className='cursor-pointer font-basicaline text-xl px-0.5 capitalize'>{el.type}</legend>
          <article className='px-2 max-h-50 overflow-auto'>
            {el.data.map((item) => (
              <label key={item} className='flex gap-2 cursor-pointer'>
                <input type='radio' name='filter' className='cursor-pointer flex items-center gap-2 capitalize' onClick={() => filter.setOption(el.type, item)} />
                {item}
              </label>
            ))}
          </article>
        </fieldset>
      ))}
    </aside>
  )
}

export default Filter

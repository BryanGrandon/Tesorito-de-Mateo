import { useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import { dataFilter } from '../../../utilities/storage/storage-filter'

type Props = {
  type: string
}

const DynamicContent = ({ type = '' }: Props) => {
  const [data, setData] = useState<any[]>([])
  const newData = useStore(dataFilter)

  useEffect(() => {
    setData(newData)
  }, [newData])

  return (
    <article style={{ gridArea: 'content' }} className='p-4 min-h-[70vh]'>
      <article className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4'>
        {data.map((el) => (
          <a
            href={'/Brisa-de-paz/' + type + '_' + el?.name.toLowerCase().split(' ').join('-')}
            key={el?.name}
            className='flex flex-row items-center rounded-xl overflow-hidden bg-white/45 shadow-lg shadow-black/20 text-black hover:scale-[1.02] transition-transform duration-150 ease-in-out cursor-pointer'
          >
            <img src={el?.img == '' ? el.productData[0].url : el.img} className='h-20 object-cover w-20' alt={`img-${el?.name}`} />
            <section className='relative overflow-hidden px-4'>
              <p className='flex flex-col text-xl'>{el?.name}</p>
              <abbr title={el?.inspiration} className='no-underline'>
                <sub className='text-gray-600'>{el.context.type}</sub>
                <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer '>{el?.context?.highlight}</h3>
              </abbr>
            </section>
          </a>
        ))}
      </article>
    </article>
  )
}

export default DynamicContent

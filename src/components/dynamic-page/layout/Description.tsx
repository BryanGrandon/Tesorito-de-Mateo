import { useState, type JSX } from 'react'

type Props = {
  description: string
  info: {
    name: string
    value: string | string[]
  }[]
}

const Description = ({ description, info }: Props) => {
  const [type, setType] = useState<string>('desc')

  return (
    <article className='rounded-lg overflow-hidden border border-black/40 shadow-md shadow-gray-400 max-w-150'>
      <section className='grid grid-cols-2 border-b border-black/40 '>
        <button className={`p-1 border-r-1 cursor-pointer ${type == 'desc' ? 'bg-primary text-white' : ''}`} onClick={() => setType('desc')}>
          Description
        </button>
        <button className={`p-1 cursor-pointer ${type == 'info' ? 'bg-primary text-white' : ''}`} onClick={() => setType('info')}>
          Información
        </button>
      </section>

      <article className='px-4 py-2 relative'>
        <article className={type == 'desc' ? '' : 'hidden'}>
          <p className='prose '>{description}</p>
        </article>

        <article className={`flex flex-col gap-2  ${type == 'info' ? '' : 'hidden'}`}>
          {info.map((el) => (
            <p key={el.name}>
              <span className='font-semibold'>{el.name}:</span> <span>{el.value}</span>
            </p>
          ))}
        </article>
      </article>
    </article>
  )
}

export default Description

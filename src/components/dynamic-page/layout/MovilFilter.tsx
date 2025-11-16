import { useEffect } from 'react'
import useFilter from '../../../utilities/hooks/useFilter'
import IconClose from '../../core/icons/IconClose'
import IconFilter from '../../core/icons/IconFilter'

type filter = {
  data: any[]
  type: string
}

const MovilFilter = ({ data, type }: filter) => {
  const { filter, getContentFilter } = useFilter()

  useEffect(() => {
    filter.setData(data)
  }, [])

  const content = getContentFilter(data, type)

  const clickClose = () => {
    const $btn = document.getElementById('movil-filter')
    $btn?.classList.toggle('hidden')
  }

  return (
    <article style={{ gridArea: 'aside-movil' }} className='block md:hidden'>
      <section className='px-4'>
        <button onClick={clickClose} className='flex gap-2 shadow shadow-black/20 py-1 px-2 rounded-lg active:scale-95'>
          <IconFilter /> Filter
        </button>
      </section>

      <article id='movil-filter' className='hidden fixed top-0 left-0 right-0 bottom-0 z-20 h-full overflow-auto bg-[#efefef] '>
        <section className='flex justify-end p-2'>
          <button onClick={clickClose} className='shadow shadow-black/40 rounded-full p-2 absolute '>
            <IconClose />
          </button>
        </section>

        <article className='flex flex-col gap-2 '>
          {content.map((el) => (
            <section key={el.type} className='mx-4 flex flex-col gap-2'>
              <p className='p-2 capitalize font-basicaline text-xl'>{el.type}</p>

              {el.data && el.data.length > 0 ? (
                <article className='pl-6 py-1 flex flex-col gap-2 max-h-60 overflow-auto'>
                  {el.data.map((item) => (
                    <label
                      key={item}
                      className='flex gap-2 hover:text-primary transition-colors duration-150 ease-in-out p-2 cursor-pointer bg-white/90 shadow shadow-black/40 rounded-lg px-4 active:scale-97'
                    >
                      <input
                        type='radio'
                        name='filter'
                        className='cursor-pointer flex items-center gap-2 capitalize'
                        onClick={() => {
                          filter.setOption(el.type, item)
                          clickClose()
                        }}
                      />
                      {item}
                    </label>
                  ))}
                </article>
              ) : null}
            </section>
          ))}
        </article>
      </article>
    </article>
  )
}

export default MovilFilter

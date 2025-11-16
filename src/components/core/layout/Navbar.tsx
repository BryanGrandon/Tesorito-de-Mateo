import { NAVBAR } from '../../../utilities/constants/navigation'
import IconClose from '../icons/IconClose'
import IconMenu from '../icons/IconMenu'
import IconWsp from '../icons/IconWsp'
import NavbarLink from '../ui/NavbarLink'
import NavbarMenu from '../ui/NavbarMenu'

const Navbar = () => {
  const clickClose = () => {
    const btn = document.getElementById('list-movil')
    btn?.classList.toggle('hidden')
    btn?.classList.toggle('flex')
  }

  return (
    <header className='text-black bg-white/70'>
      <nav className='p-4 flex flex-col gap-4'>
        <article className='flex w-full items-center justify-between gap-8'>
          <a href='/Tesorito-de-Mateo/' className='min-w-fit font-bold'>
            Tesorito de Mateo
          </a>
          <article className='hidden lg:block'>
            <NavbarMenu />
          </article>
          <button className='flex lg:hidden active:scale-95' onClick={clickClose}>
            <IconMenu />
          </button>
        </article>
      </nav>

      <article id='list-movil' className='hidden fixed top-0 left-0 right-0 bottom-0 z-20 bg-[#efefef] text-black  flex-col'>
        <section className='p-2 pb-4 flex justify-end'>
          <button className='rounded-full h-10 w-10 flex items-center justify-center bg-white/40 shadow shadow-black/40 active:scale-95' onClick={clickClose}>
            <IconClose />
          </button>
        </section>
        <article className='flex flex-col w-full gap-2'>
          {NAVBAR.map((el) => (
            <section key={el.id} className='mx-4'>
              {el.catalogs && el.catalogs.length > 0 ? (
                <p className='p-2'>{el.nav}</p>
              ) : (
                <NavbarLink url={el.url ? el.url : ''} text={el.nav} onClick={clickClose} moreClass='bg-white/90 shadow shadow-black/40 rounded-lg px-4 active:scale-97' />
              )}
              {el.catalogs && el.catalogs.length > 0 ? (
                <article className='pl-6 flex flex-col gap-2'>
                  {el.catalogs.map((catalog) => (
                    <NavbarLink key={catalog.name} url={catalog.url} text={catalog.name} onClick={clickClose} moreClass='bg-white/90 shadow shadow-black/40 rounded-lg px-4 active:scale-97' />
                  ))}
                </article>
              ) : null}
            </section>
          ))}
        </article>
      </article>
      <a
        target='__blank'
        href='https://api.whatsapp.com/send?phone=982642669&text=Hola, estoy interesado en comprar.'
        className='fixed bottom-[1rem] right-[0.5rem] rounded-full p-2 bg-[#25D366] shadow shadow-black/50 text-white active:scale-95 hover:scale-105 z-10 text-2xl'
      >
        <IconWsp />
      </a>
    </header>
  )
}

export default Navbar

import { NAVBAR } from '../../../utilities/constants/navigation'
import IconArrowDown from '../icons/IconArrowDown'
import NavbarLink from './NavbarLink'

const NavbarMenu = () => {
  const openMenu = (id: number) => {
    const $menu = document.getElementById(`menu-${id}`)
    $menu?.classList.toggle('opacity-100')
    $menu?.classList.toggle('visible')
  }

  return (
    <>
      {NAVBAR.map((el) => (
        <section key={el.id} className='inline-block relative group mx-4'>
          {el.catalogs && el.catalogs.length > 0 ? (
            <p className={`cursor-pointer duration-150 ease-in-out flex items-center gap-1 p-2 w-fit mobile-${el.id}`} onClick={() => openMenu(el.id)}>
              <span>{el.nav}</span>
              <IconArrowDown />
            </p>
          ) : (
            <NavbarLink url={el.url ? el.url : ''} text={el.nav} onClick={() => {}} />
          )}

          {el.catalogs && el.catalogs.length > 0 ? (
            <article
              id={`menu-${el.id}`}
              className='flex flex-col w-fit absolute top-full left-0 bg-white shadow-lg shadow-black/20 rounded-b-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-150 ease-in-out z-10'
            >
              {el.catalogs.map((catalog) => (
                <NavbarLink key={catalog.name} url={catalog.url} text={catalog.name} onClick={() => {}} />
              ))}
            </article>
          ) : null}
        </section>
      ))}
    </>
  )
}

export default NavbarMenu

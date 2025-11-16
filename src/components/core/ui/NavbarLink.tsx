type navbar_link = {
  url: string
  text: string
  onClick: () => void
  moreClass?: string
}

const NavbarLink = ({ url, text, onClick, moreClass }: navbar_link) => {
  const click = () => {
    onClick()
    window.location.href = url
  }
  return (
    <p className={`hover:text-primary transition-colors duration-150 ease-in-out p-2 cursor-pointer ${moreClass}`} onClick={click}>
      {text}
    </p>
  )
}

export default NavbarLink

type button_link = {
  link: string
  text: string
  moreClass?: string
}

const ButtonLink = ({ link, text, moreClass = '' }: button_link) => {
  const clickButton = () => (window.location.href = link)

  return (
    <button className={`block bg-primary text-white cursor-pointer py-1 px-4 rounded-lg  hover:scale-105 active:scale-95 ${moreClass}`} onClick={clickButton}>
      {text}
    </button>
  )
}

export default ButtonLink

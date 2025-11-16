import IconWsp from '../icons/IconWsp'

const Footer = () => {
  return (
    <footer className=''>
      <article className='flex flex-col items-center p-4 gap-2 '>
        <p className='text-lg text-center'>Comunícate conmigo si deseas adquirir algún producto.</p>
        <a
          href='https://api.whatsapp.com/send?phone=982642669&text=Hola, estoy interesado en comprar.'
          target='__blank'
          className='text-xl font-semibold hover:text-primary flex flex-col justify-center items-center'
        >
          <IconWsp />
          +56 9 8264 2669
        </a>
      </article>
      <article className='bg-white/80 py-2 px-4 flex flex-col gap-2 justify-center items-center'>
        <a href='/Tesorito-de-Mateo/' className='font-basicaline text-xl font-semibold tracking-wide'>
          Tesorito de Mateo
        </a>
        <p>©2025 Tesorito de Mateo. All rights reserved.</p>
      </article>
    </footer>
  )
}

export default Footer

import IconWsp from '../icons/IconWsp'

const Footer = () => {
  return (
    <footer className=''>
      <article className='flex flex-col items-center p-4 gap-2 '>
        <p className='text-lg text-center'>Comunícate conmigo si deseas adquirir algún producto.</p>
        <a
          href='https://api.whatsapp.com/send?phone=942972075&text=Hola, estoy interesado en comprar.'
          target='__blank'
          className='text-xl font-semibold hover:text-primary flex flex-col justify-center items-center'
        >
          <IconWsp />
          +56 9 4297 2075
        </a>
      </article>
      <article className='bg-white/80 py-2 px-4 flex flex-col gap-2 justify-center items-center'>
        <a href='/Brisa-de-paz/' className='font-basicaline text-xl font-semibold tracking-wide'>
          Brisa de Paz
        </a>
        <p>©2025 Brisa de Paz. All rights reserved.</p>
      </article>
    </footer>
  )
}

export default Footer

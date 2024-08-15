const Footer = () => {
  return (
    <footer className='mt-auto flex flex-col items-center justify-center gap-2 bg-gray-200 text-gray-800 p-4'>
      <p className='text-sm'>&copy; {new Date().getFullYear()} Veni Mitev</p>

      <section className='flex flex-row text-sm text-center divide-x divide-solid divide-slate-950'>
        <a
          href='https://github.com/VeniMitev/mm-to-inch-calc'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline px-2'
        >
          This repo
        </a>

        <a
          href='https://venimitev.dev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline px-2'
        >
          venimitev.dev
        </a>

        <a
          href='https://github.com/VeniMitev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline px-2'
        >
          Github profile
        </a>

        <a
          href='https://www.linkedin.com/in/venelin-mitev/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline px-2'
        >
          LinkedIn
        </a>
      </section>
    </footer>
  );
};

export default Footer;

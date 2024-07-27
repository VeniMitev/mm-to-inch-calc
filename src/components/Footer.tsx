const Footer = () => {
  return (
    <footer className='mt-auto flex flex-col items-center justify-center gap-2 bg-gray-200 text-gray-800 p-4'>
      <p className='text-sm'>&copy; {new Date().getFullYear()} Veni Mitev</p>

      <section className='flex flex-row gap-2 text-sm text-center'>
        <p>
          This repo:{' '}
          <a
            href='https://github.com/VeniMitev/mm-to-inch-calc'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            github.com
          </a>
        </p>

        <p>
          Portfolio:{' '}
          <a
            href='https://venimitev.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            venimitev.dev
          </a>
        </p>

        <p>
          Github profile:{' '}
          <a
            href='https://github.com/VeniMitev'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            github.com
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;

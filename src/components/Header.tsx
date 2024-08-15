const Header = () => {
  return (
    <header className='flex flex-col items-center justify-center gap-4 bg-gray-200 text-gray-800 p-4'>
      <h1 className='text-2xl font-bold'>Inches to Millimeters Converter</h1>

      <h2>Convert inches to millimeters and vice versa</h2>

      <p className='text-sm max-w-prose'>
        Enter a value in the input fields and the conversion will be done
        automatically
      </p>

      <p className='text-sm max-w-prose'>
        What sets this tool apart from others online is its unique use of
        fractions for inputting and outputting values during conversions. While
        most tools provide output in decimal form, this one gives you results in
        fractions, which is far more useful in real-life scenarios like interior
        design projects.
      </p>

      <p className='text-sm max-w-prose'>
        The first version of this tool was created for an application I
        developed for one of my employers, specifically for generating invoices
        for interior design projects. Users often need to convert measurements
        from millimeters to inches and prefer the results in fractions rather
        than decimals. Existing tools didn’t offer the convenience and speed
        that users expected.
      </p>

      <p className='text-sm max-w-prose'>
        I developed this tool to meet those needs, providing an easy and fast
        way to perform multiple conversions, seamlessly integrated into the
        existing application, which was by far the biggest advantage of this
        tool. This current version is a showcase piece for my portfolio,
        demonstrating my ability to tackle complex projects as a software
        developer. Although it looks different from the one built for the
        application, the inner workings remain the same.
      </p>
    </header>
  );
};

export default Header;

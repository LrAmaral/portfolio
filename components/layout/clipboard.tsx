import Link from "next/link";

export const Clipboard = () => {
  return (
    <section className='clipboard-container'>
      <div className='clipboard-icon'>
        {/* Render your clipboard icon here */}
      </div>
      <div className='hover:scale-125 xs:text-sm md:text-base hover:font-alt transition-all ease-in-out'>
        <Link href={'mailto:amaralrdev@gmail.com'}>amaralrdev@gmail.com</Link>
      </div>
    </section>
  );
};

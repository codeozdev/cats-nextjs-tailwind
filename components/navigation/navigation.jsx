import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'
import Image from 'next/image'

const Navigation = () => {
    return (
        <div className='left-0 right-0 top-0 z-[999] bg-opacity-70 bg-black backdrop-blur-md absolute'>
            <PaddingContainer>
                <div className='p-4 flex items-center justify-between'>
                    <Link href='/'>
                        <Image
                            src='/logo.webp'
                            width={200}
                            height={200}
                            alt='cats logo'
                            className='max-w-[80px] md:max-w-[200px] bg-cover'
                        />
                    </Link>
                    <nav>
                        <ul className='flex items-center gap-2 md:gap-4 text-white text-sm md:text-xl font-bold'>
                            <li className='hover:bg-red-600 rounded-lg md:px-3 md:py-1'>
                                <Link href='/about'>About</Link>
                            </li>
                            <li className='hover:bg-red-600 rounded-lg md:px-3 md:py-1'>
                                <Link href='/cats'>Cats</Link>
                            </li>
                            <li className='hover:bg-red-600 rounded-lg md:px-3 md:py-1'>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </PaddingContainer>
        </div>
    )
}
export default Navigation

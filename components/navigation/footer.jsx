import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterCircle,
} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='border-t fixed left-0 bottom-0 w-full p-4'>
            <PaddingContainer>
                <div className='flex justify-between items-center'>
                    <nav>
                        <ul className='flex  items-center gap-2 text-sm md:text-base text-neutral-500'>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                            <li>
                                <Link href='/cats'>Cats</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex items-center justify-center'>
                        <div className='hidden md:flex flex-col items-center'>
                            <h1 className='text-lg font-bold text-neutral-600 mr-4'>
                                Social Networks:
                            </h1>
                        </div>
                        <div className='flex items-center'>
                            <Link
                                href='https://www.facebook.com/'
                                target='_blank'>
                                <AiFillFacebook
                                    size={40}
                                    className='text-blue-600 max-w-[20px] md:max-w-[40px]'
                                />
                            </Link>
                            <Link
                                href='https://www.instagram.com/'
                                target='_blank'>
                                <AiFillInstagram
                                    size={40}
                                    className='text-red-600 max-w-[20px] md:max-w-[40px]'
                                />
                            </Link>
                            <Link
                                href='https://www.twitter.com/'
                                target='_blank'>
                                <AiFillTwitterCircle
                                    size={40}
                                    className='text-blue-400 max-w-[20px] md:max-w-[40px]' 
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </PaddingContainer>
        </div>
    )
}
export default Footer

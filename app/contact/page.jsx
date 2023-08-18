import PaddingContainer from '@/components/layout/padding-container'
import Link from 'next/link'
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

const Contact = () => {
    return (
        <PaddingContainer>
            <div className='text-sm my-20 md:my-0 md:flex md:justify-center flex-col h-screen md:text-lg md:space-y-5'>
                <div>
                    <h2>Contact Us</h2>
                    <p>
                        Hello Fellow Cat Lovers, We would be delighted to hear
                        from you, whether it{`'`}s to connect, share
                        experiences, or ask questions. As part of the Adorable
                        Cats family, we eagerly look forward to engaging with
                        cat enthusiasts like yourself and discussing all things
                        feline.
                    </p>
                </div>
                <div className='space-y-1'>
                    <h2>Contact Information</h2>
                    <p>
                        🐾 Email Address:{' '}
                        <span className='underline'>info@adorablecats.com</span>
                    </p>
                    <p className='text-xs md:text-base'>
                        🐾 Social Media: Follow us on Instagram and Twitter.
                    </p>
                </div>
                <div>
                    <h2>Questions and Feedback</h2>
                    <p>
                        We value any questions, suggestions, or feedback you
                        might have. Whether you{`'`}re curious about specific
                        topics related to our site, have content suggestions, or
                        want to share heartwarming stories about your feline
                        friends, please feel free to reach out
                    </p>
                </div>
                <div>
                    <h2>Design Credits</h2>
                    <p>
                        The captivating design of Adorable Cats was brought to
                        life by our talented and dedicated design team. Their
                        creative expertise and passion for felines have
                        contributed to the visual charm of our website
                    </p>
                    <p className='text-red-600 font-bold my-3'>
                        Developer{`'`}s Name:{' '}
                        <span className='text-black font-normal'>
                            Oguzhan Uguz
                        </span>
                    </p>
                    <p className='flex items-center text-red-600 font-bold'>
                        Developer Contacts:{' '}
                        <span className='flex items-center'>
                            <Link
                                href='https://www.twitter.com/codeozdev'
                                target='_blank'>
                                <AiFillTwitterCircle
                                    size={30}
                                    className='text-blue-400 max-w-[20px] md:max-w-[30px] ml-2'
                                />
                            </Link>
                            <Link
                                href='https://www.twitter.com/codeozdev'
                                target='_blank'>
                                <AiFillGithub
                                    size={30}
                                    className='text-black max-w-[20px] md:max-w-[30px] ml-2'
                                />
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </PaddingContainer>
    )
}
export default Contact

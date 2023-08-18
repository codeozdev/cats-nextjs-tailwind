import Image from 'next/image'
import PaddingContainer from '../layout/padding-container'

const PostImage = () => {
    return (
        <div className=''>
            <div className='relative w-full h-40 md:h-[350px] 2xl:h-[600px] '>
                <Image
                    src='/img2.jpg'
                    fill
                    alt='cat'
                    className='bg-cover bg-red-500'
                />
            </div>
            <PaddingContainer>
                <div className='flex flex-row items-center'>
                    <div>
                        <p className='font-bold md:text-4xl my-10 text-center md:text-start'>
                            First Aid
                            <span className='text-red-500'>
                                {' '}
                                Guide For Your Furry Friend
                            </span>
                        </p>
                        <p className='md:max-w-[800px] text-neutral-500 text-center md:text-start '>
                            At Cat Care Corner, were dedicated to providing you
                            with all the information you need to ensure the
                            well-being of your feline companions. Explore our
                            articles and resources to become the best cat parent
                            you can be!{' '}
                        </p>
                    </div>
                    <div className='flex flex-col mt-10 '>
                        <Image
                            src='/trasparent1.png'
                            width={200}
                            height={200}
                            alt='cat'
                            className='bg-cover hidden md:block'
                        />
                    </div>
                </div>
            </PaddingContainer>
        </div>
    )
}
export default PostImage

import Image from 'next/image'
import Link from 'next/link'

const PostCat = ({ image, cat }) => {
    return (
        <Link
            href={`/cats/${cat.id}`}
            className='flex flex-col items-center justify-center border rounded-lg md:grayscale hover:grayscale-0  '>
            <Image
                src={image.url}
                width={400}
                height={400}
                alt='cats'
                className='w-[150px] h-[80px] md:w-[400px] md:h-[200px] object-cover object-center rounded-t-lg '
            />
            <div>
                <p className='font-bold p-1 md:p-5 '>{cat.name}</p>
            </div>
        </Link>
    )
}
export default PostCat

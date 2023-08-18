import PaddingContainer from '@/components/layout/padding-container'
import getCats from '@/lib/getId'
import Link from 'next/link'

const CatPage = async ({ params: { catId } }) => {
    const cats = await getCats(catId)

    console.log(cats)

    return (
        <PaddingContainer>
            <div className='text-sm mt-24 xl:mt-48 2xl:mt-60 h-full w-full '>
                <div>
                    <h2>{cats.name}</h2>
                    <p>{cats.description}</p>
                </div>
                <div className='my-4'>
                    <h2>Temperament</h2>
                    <p className=''>{cats.temperament}</p>
                </div>
                <div className='my-5 space-y-2  truncate'>
                    <p className='flex justify-between items-center font-semibold text-red-600'>
                        Origin
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.origin}
                        </span>
                    </p>
                    <p className='flex justify-between items-center font-semibold text-red-600'>
                        Life Span
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.life_span}
                        </span>
                    </p>
                    <p className='flex justify-between items-center font-semibold text-red-600'>
                        Adaptability
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.adaptability}
                        </span>
                    </p>
                    <p className='flex justify-between items-center font-semibold text-red-600 '>
                        Child Friendly
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.child_friendly}
                        </span>
                    </p>
                    <p className='flex justify-between items-center font-semibold text-red-600 '>
                        Dog Friendly
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.dog_friendly}
                        </span>
                    </p>
                    <p className='flex justify-between items-center font-semibold text-red-600'>
                        Intelligence
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.intelligence}
                        </span>
                    </p>
                    <p className='flex justify-between items-center font-semibold text-red-600'>
                        Stranger Friendly
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.stranger_friendly}
                        </span>
                    </p>
                    <p className='flex justify-between items-center font-semibold text-red-600'>
                        Health Issues
                        <hr className='border-dashed border-1 border-gray-400 w-full mx-2' />
                        <span className='text-black font-normal'>
                            {cats.health_issues}
                        </span>
                    </p>
                </div>
                <div className='mt-20'>
                    <Link href='/' target='_blank'>{cats.wikipedia_url}</Link>
                </div>
            </div>
        </PaddingContainer>
    )
}
export default CatPage

// adaptability	5
// affection_level	5
// child_friendly	3
// dog_friendly	4
// energy_level	5
// health_issues	2
// intelligence	5
// social_needs	5
// stranger_friendly	5
{
    /* <p>origin: {cats.origin}</p>
<p>{cats.life_span}</p> */
}

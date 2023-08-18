import PaddingContainer from '@/components/layout/padding-container'
import PostCat from '@/components/post/post-cat'

import getImage from '@/lib/getImage'
import getCats from '@/lib/getCats'

const CatsPage = async () => {
    const images = await getImage()
    const cats = await getCats()

    return (
        <PaddingContainer>
            <div className='grid grid-cols-2 md:grid-cols-5 text-sm my-24 md:mt-40 2xl:mt-72  gap-4 h-full md:gap-5'>
                {images.map((image, index) => (
                    <PostCat key={image.id} image={image} cat={cats[index]} />
                ))}
            </div>
        </PaddingContainer>
    )
}
export default CatsPage

//iki api datasini birlestirip gonderdik || index ile

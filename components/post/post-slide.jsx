'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import PaddingContainer from '../layout/padding-container'

const data = [
    {
        id: 1,
        image: '/slayt1.jpg',
        title: 'Siamese cats are known for their intelligence, sociability, and talkative nature.',
    },
    {
        id: 2,
        image: '/slayt2.jpg',
        title: 'Tabby cats are known for their lively and energetic nature.',
    },
    {
        id: 3,
        image: '/slayt3.jpg',
        title: 'Persian cats are known for their calm and gentle nature.',
    },
    {
        id: 4,
        image: '/slayt4.jpg',
        title: 'Ragdoll cats are known for their affectionate and docile nature.',
    },
]

const PostSlide = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
            4000,
        )
        return () => clearInterval(interval)
    }, [])

    return (
        <PaddingContainer>
            <div className='flex flex-col md:flex-row items-center mt-10'>
                <Image
                    src={data[current].image}
                    width={400}
                    height={400}
                    alt='cats'
                    className='bg-cover rounded-lg shadow-lg shadow-red-600 max-w-[280px] max-h-[150px] md:max-w-[400px] md:max-h-[180px]'
                />
                <p className='mt-10 md:mt-0 text-center text-sm md:ml-5 md:text-lg font-semibold'>
                    {data[current].title}
                </p>
            </div>
        </PaddingContainer>
    )
}
export default PostSlide

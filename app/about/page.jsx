import PaddingContainer from '@/components/layout/padding-container'

const About = () => {
    return (
        <PaddingContainer>
            <div className='text-sm my-20 md:my-0 md:flex md:justify-center md:items-center flex-col h-screen md:text-lg'>
                <div>
                    <h2>About Us</h2>
                    <p>
                        Welcome to our passionate community of cat lovers! At
                        Purrfect Haven, we{`'`}re all about celebrating the
                        wonderful world of cats. Our journey began with a shared
                        love for these fascinating and mysterious creatures, and
                        we
                        {`'`}re excited to share our knowledge, stories, and
                        experiences with fellow cat enthusiasts.
                    </p>
                </div>
                <div>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create a space where cat lovers from
                        all walks of life can come together to connect, learn,
                        and exchange ideas. Whether you{`'`}re a first-time cat
                        owner or a seasoned feline aficionado, our platform aims
                        to provide valuable information, heartwarming stories,
                        and a sense of belonging within the vibrant cat-loving
                        community.
                    </p>
                </div>
                <div>
                    <h2>What We Offer</h2>
                    <p>
                        🐾 Heartwarming Stories: Explore heartwarming and
                        humorous anecdotes shared by fellow cat lovers. Learn
                        about the unique personalities and quirks that make our
                        feline companions so special.
                    </p>
                    <p>
                        🐾 Expert Advice: Gain insights from experienced
                        veterinarians, behaviorists, and cat experts. Our team
                        is dedicated to providing accurate and up-to-date
                        information to ensure your cat{`'`}s health and
                        happiness.
                    </p>
                </div>
            </div>
        </PaddingContainer>
    )
}
export default About

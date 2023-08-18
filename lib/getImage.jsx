const API_KEY = process.env.API_KEY

export default async function getImage() {
    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`,
    )

    if (!res.ok) throw new Error('getImage failed')

    return res.json()
}

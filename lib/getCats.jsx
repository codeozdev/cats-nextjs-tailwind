export default async function getCats() {
    const res = await fetch(`https://api.thecatapi.com/v1/breeds/`)

    if (!res.ok) throw new Error('getCats failed')

    return res.json()
}

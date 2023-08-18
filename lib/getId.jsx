export default async function getId(getId) {
    const res = await fetch(`https://api.thecatapi.com/v1/breeds/${getId}`)

    if (!res.ok) throw new Error('getId failed')

    return res.json()
}

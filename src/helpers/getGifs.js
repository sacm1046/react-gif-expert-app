export const getGifs = async ( category ) => {
    const apyKey = 'LdTY3yN5wgkuo9bkXu3i44DHRCwiFKSK';
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&&api_key=${apyKey}&&limit=10`);
    const { data } = await res.json()

    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images?.downsized_medium.url
    }))
    return gifs
}


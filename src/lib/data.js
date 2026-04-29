export const getPhotos = async () => {
    const res = await fetch("https://picgen-conceptual.vercel.app/data.json");
    const photos = await res.json();

    return photos;
}
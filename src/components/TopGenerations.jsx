import { getPhotos } from "@/lib/data";
import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
    const photos = await getPhotos();

    const topPhotos = photos.slice(0, 8);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-5">
                Top Generations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {topPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                ))}
            </div>
        </div>
    );
};

export default TopGenerations;

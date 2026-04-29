import PhotoCard from "@/components/PhotoCard";
import { getPhotos } from "@/lib/data";

const AllPhotosPage = async () => {
    const photos = await getPhotos();

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-5">All Photos</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                ))}
            </div>
        </div>
    );
};

export default AllPhotosPage;

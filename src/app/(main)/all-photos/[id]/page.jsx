import PhotoCard from "@/components/PhotoCard";
import { getPhotos } from "@/lib/data";
import React from "react";

const PhotosDetailPage = async ({ params }) => {
    const { id } = await params;

    const photos = await getPhotos();

    const photo = photos.find((photo) => photo.id === parseInt(id));

    return (
        <div>
            <h2>Photos Detail {id}</h2>
            <PhotoCard photo={photo}></PhotoCard>
        </div>
    );
};

export default PhotosDetailPage;

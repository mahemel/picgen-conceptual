import React from "react";

const PhotosDetailPage = async ({ params }) => {
    const { id } = await params;
    return (
        <div>
            <h2>Photos Detail {id}</h2>
        </div>
    );
};

export default PhotosDetailPage;

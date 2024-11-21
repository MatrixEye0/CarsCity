const FormatResult = (resp) => {
    let tempResult = {};

    resp.forEach((item) => {
        const listingId = item.carListing?.id;

        // Initialize the structure for each listing if it doesn't exist
        if (!tempResult[listingId]) {
            tempResult[listingId] = {
                car: item.carListing,
                images: []
            };
        }

        // Add images if they exist
        if (item.carImages) {
            tempResult[listingId].images.push(item.carImages);
        }
    });

    // Convert the object to an array of formatted results
    const finalResult = Object.values(tempResult).map((item) => ({
        ...item.car,
        images: item.images,
    }));

    return finalResult;
};

export default {
    FormatResult
};

const parseHotelsData = (data) => {

    const tempHotels = [];

    for (let i = 0; i < data.data.length; i++) {

        if(i === 10) break; // Limiting the number of hotels to 10 (for now

        const currentHotel = data.data[i];

        let image = currentHotel.cardPhotos[0].sizes.urlTemplate;
        image = image.replace("{width}", "600");
        image = image.replace("{height}", "400");
        
        tempHotels.push(
            {
                title: currentHotel.title,
                primaryInfo: currentHotel.primaryInfo,
                secondaryInfo: currentHotel.secondaryInfo,
                provider: currentHotel.provider,
                image: image
            }
        )

    };

    return tempHotels;
};

export default parseHotelsData;
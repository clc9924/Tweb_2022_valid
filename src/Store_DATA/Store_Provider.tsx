import RootStore from "./Root_store"

const storeProvider = RootStore.create({
    contents: [
        {
            id: '1',
            seen: false,
            city: 'CITY_1',
            attrcations: 'ATTRCATIONS_1',
            hotel: 'HOTEL_1',
            stars: 'STARS_1',
            photo: 'PHOTO_1',
            },
            {
            id: '2',
            seen: false,
            city: 'CITY_2',
            attrcations: 'ATTRCATIONS_2',
            hotel: 'HOTEL_2',
            stars: 'STARS_2',
            photo: 'PHOTO_2',
            },
            {
            id: '3',
            seen: false,
            city: 'CITY_3',
            attrcations: 'ATTRCATIONS_3',
            hotel: 'HOTEL_3',
            stars: 'STARS_3',
            photo: 'PHOTO_3',
            },
            {
            id: '4',
            seen: false,
            city: 'CITY_4',
            attrcations: 'ATTRCATIONS_4',
            hotel: 'HOTEL_4',
            stars: 'STARS_4',
            photo: 'PHOTO_4',
            }
    ]
})

export default storeProvider
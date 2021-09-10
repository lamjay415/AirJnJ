export const propTypeGroupOpts = [
    {value:'Apartment', label:'Apartment'}, 
    {value:'House', label:'House'}, 
    {value:'Secondary Unit', label:'Secondary Unit'}, 
    {value:'Unique Space', label:'Unique Space'}, 
    {value:'Hotel/Motel', label:'Hotel/Motel'}
];

export const propTypeOpts = {
    'Apartment': [{
        value: 'Rental Unit', label: 'Rental Unit'},
        {value: 'Condo', label: 'Condo'},
        {value: 'Loft', label: 'Loft'},
        {value: 'Studio', label: 'Studio'}],
    'House': [
        {value: 'Residential Home', label: 'Residential Home'},
        {value: 'Cabin', label: 'Cabin'},
        {value: 'Villa', label: 'Villa'},
        {value: 'Farm Stay', label: 'Farm Stay'},
        {value: 'Mansion', label: 'Mansion'}
    ],
    'Secondary Unit':[
        {value: 'Guesthouse', label: 'Guesthouse'},
        {value: 'Guest Suite', label: 'Guest Suite'},
        {value: 'Farm Stay', label: 'Farm Stay'}
    ],
    'Unique Space': [
        {value: 'Barn', label: 'Barn'},
        {value: 'Boat', label: 'Mansion'},
        {value: 'Tree House', label: 'Tree House'},
        {value: 'Castle', label: 'Castle'},
        {value: 'Pension', label: 'Pension'},
        {value: 'Camper/RV', label: 'Camper/RV'}
    ],
    "Hotel/Motel": [
        {value: 'Hotel', label: 'Hotel'},
        {value: 'Resort', label: 'Resort'},
        {value: 'Aparthotel', label: 'Aparthotel'},
        {value: 'Serviced Apartment', label: 'Serviced Apartment'},
        {value: 'Boutique hotel', label: 'Boutique hotel'}
    ]
}

export const privacyTypeOpts = [
    {value: 'An entire place', label: 'An entire place'},
    {value: 'A private room', label: 'A private room'},
    {value: 'A shared room', label: 'A shared room'},
];
import { getData } from "../utilities/api";

export async function getAllCities(setCities) {
    console.log('city 1');
    let url = 'theater/filter/cities';
    let data = await getData(url);
    console.log(data);
    data = data.data['location'];
    let cities = [''];

    for(let i=0;i<data.length;i++) {
        if(!cities.includes(data[i]['city'])) {
            cities.push(data[i]['city']);
        }
   }
   console.log('city 2', cities);
   setCities(cities)
   return (cities);

}
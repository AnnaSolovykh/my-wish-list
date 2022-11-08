import pumpkin from './pumpkin.jpg';
import painting from './painting.jpg';
import roses from './roses.jpg';
import history from './history.jpg';
import wine from './wine.jpg';
import psychology from './psychology.jpg';

export const data = [
 
    {
        id: 1, 
        image: (pumpkin),
        desription: "A piece of a pumpkin pie",
        showMoreState: false,
        showMore:"Better if it is with nuts or cream, also can be homemade.",
        url: "http://www.atolyenorte.com/"
    },

    {
        id: 2, 
        image: (roses),
        desription: "A simple bunch of roses",
        showMoreState: false,
        showMore:"Should be without any other flowers, plain, five or seven.",
        url: "https://www.ciceksepeti.com/vazoda-cardak-gul-ve-bicme-aranjmani-via284"
    },

    {
        id: 3, 
        image: (painting),
        desription: "A painting-on-water master class",
        showMoreState: false,
        showMore:"I know such a thing is organised in the Castle of Ankara, but I don't know the exact place. It can be found on" + <a href="https://www.instagram.com/mamastauffs/?igshid=YmMyMTA2M2Y%3D">"Danielle's Instagam"</a> + "page.",
        url: "https://www.tripadvisor.com.tr/AttractionsNear-g298656-d294557-Ankara_Castle-Ankara.html"
    },

    {
        id: 4, 
        image: (wine),
        desription: "A bottle of good wine",
        showMoreState: false,
        showMore:"It should be from Kayra or Pamukkale collection, dry.",
        url: "https://pamukkalewinery.com/mainPage"
    },

    {
        id: 5, 
        image: (history),
        desription: "A course on the history of Russia",
        showMoreState: false,
        showMore:"Except the courses on colonialisation and collectivisation, which I have already taken.",
        url: "https://history.simplymanakova.ru"
    },

    {
        id: 6, 
        image: (psychology),
        desription: "A psycological course",
        showMoreState: false,
        showMore:"I'd prefer courses on self-development or 'Mother's Anger'.",
        url: "https://mamaterapia.ru/"
    },
]
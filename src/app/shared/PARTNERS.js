
import heartImg from '../assets/teams/heart.jpg';
import volunteersImg from '../assets/teams/volunteers.jpg';
import giftImg from '../assets/teams/gift.jpg';
import familyImg from '../assets/teams/family.jpg';


export const PARTNERS = [
    {
        id: 0,
        name: 'Partner with Us',
        image: heartImg,
        featured: false,
        description:
            "Learn the ways in which you can partner with us to make sure everyone has an opportunity to thrive."
    },
    {
        id: 1,
        name: 'Advocate',
        image: giftImg,
        featured: false,
        description:
            'With your help, we advocate for public policies that support skills training, equitable employment and community-based services for people who want to work and advance careers.'
    },
    {
        id: 2,
        name: 'Become a Sponsor',
        image: familyImg,
        featured: false,
        description:
            'When you sponsor, you can grow your business while investing in our life-changing and planet-sustaining mission.'
    },
    {
        id: 3,
        name: 'Become a Volunteer',
        image: volunteersImg,
        featured: true,
        description:
            'Volunteers help people build skills, earn jobs, and strengthen their finances.'
    }
];

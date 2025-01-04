import React from 'react';
import InstaPost from './instapost';
import './instapost.css';

function App() {
    const posts = [
        { username: 'kurhe39', imgurl: 'https://picsum.photos/201/300', about: "Nature lover" },
        { username: 'sam2009', imgurl: 'https://picsum.photos/202/300', about: "Tech enthusiast" },
        { username: 'alexander', imgurl: 'https://picsum.photos/203/300', about: "Avid reader" },
        { username: 'bella', imgurl: 'https://picsum.photos/204/300', about: "Photographer" },
        { username: 'charlie', imgurl: 'https://picsum.photos/205/300', about: "Music lover" },
        { username: 'diana', imgurl: 'https://picsum.photos/206/300', about: "Traveler" },
        { username: 'ethan', imgurl: 'https://picsum.photos/207/300', about: "Fitness freak" },
        { username: 'fiona', imgurl: 'https://picsum.photos/208/300', about: "Foodie" },
        { username: 'george', imgurl: 'https://picsum.photos/209/300', about: "History buff" },
        { username: 'hannah', imgurl: 'https://picsum.photos/210/300', about: "Gamer" },
        { username: 'ian', imgurl: 'https://picsum.photos/211/300', about: "Biker" },
        { username: 'julia', imgurl: 'https://picsum.photos/212/300', about: "Dog lover" },
        { username: 'kevin', imgurl: 'https://picsum.photos/213/300', about: "Coder" },
        { username: 'linda', imgurl: 'https://picsum.photos/214/300', about: "Fashionista" },
        { username: 'michael', imgurl: 'https://picsum.photos/215/300', about: "Movie buff" },
        { username: 'nina', imgurl: 'https://picsum.photos/216/300', about: "Art collector" },
        { username: 'oscar', imgurl: 'https://picsum.photos/217/300', about: "Nature enthusiast" },
        { username: 'peter', imgurl: 'https://picsum.photos/218/300', about: "Traveler" },
        { username: 'quinn', imgurl: 'https://picsum.photos/219/300', about: "Gourmet chef" },
        { username: 'rachel', imgurl: 'https://picsum.photos/220/300', about: "DIY enthusiast" }
    ];
    
    

    return (
        <div className="container">
            {posts.map((post, index) => (
                <InstaPost key={index} abc={post} />
            ))}
        </div>
    );
}

export default App;


import Essays from './essays.jpg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Recommendations(){
    const [book, setBook] = useState([]);
    let googleimage = "";

    useEffect(() => {

            axios.get('https://www.googleapis.com/books/v1/volumes?q=crawdads&key=AIzaSyBe1WdiTYAhx53y1u8vJnJOTv0fpvQetF0')
            .then(response => {
                setBook(response.data);
            })
            .catch(error => {
                console.log('error')
                console.error(error);
            });
    }, []);

    googleimage = book.items[0].volumeInfo.imageLinks.smallThumbnail;



    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide">
            <img src={googleimage}/>
        </div>
    )
}

export default Recommendations
import { useState } from 'react'
import './App.css'
import BookContainer from './components/BookContainer'
import axios from 'axios'
import Header from './components/Header'
import Typography from '@mui/material/Typography'
import React from 'react'


function App() {

    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    
    
    function sortCategories(array,sortType) {

    }

    const count = 40

    const searchBook=(evt)=>{
        if(evt.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBzMmKAHjxRFwwogI3jidqBkkmDw38ogBw&maxResults=${count}`)
            .then(res => setData(res.data.items))
            
            .catch(err => console.log(err))
        }
    }
    
    const categoriesBook = [
        { id: 1, label: 'all' },
        { id: 2, label: 'art' },
        { id: 3, label: 'biography' },
        { id: 4, label: 'computers' },
        { id: 5, label: 'history' },
        { id: 6, label: 'medical' },
        { id: 7, label: 'poetry' }
    ];

    const typeBook = [
        { id: 1, label: 'relevance'},
        { id: 2, label: 'newest'}
    ]

    const [categories, setCategories] = React.useState(categoriesBook[0].label);
    const [sort, setSort] = React.useState(typeBook[0].label);
    
    function sortCategories(array,sortType) {
        
    }

    return (
        <>
            <Header 
                search={search} 
                setSearch={setSearch} 
                searchBook={searchBook}
                categories={categories}
                setCategories={setCategories}
                sort={sort}
                setSort={setSort}
            />
            
            <BookContainer 
                books={bookData}
            />

        </>
    )
}

export default App

import { useState } from 'react'
import './App.css'
import BookContainer from './components/BookContainer'
import axios from 'axios'
import Header from './components/Header'
import Typography from '@mui/material/Typography'

function App() {
    
    const categoriesBook = [
        { label: 'all' },
        { label: 'art' },
        { label: 'biography' },
        { label: 'computers' },
        { label: 'history' },
        { label: 'medical' },
        { label: 'poetry' }
    ];

    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    
    function sortCategories() {

    }

    const count = 40

    const searchBook=(evt)=>{
        if(evt.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBzMmKAHjxRFwwogI3jidqBkkmDw38ogBw&maxResults=${count}`)
            .then(res => setData(res.data.items))
            
            .catch(err => console.log(err))
        }
    }
    
    return (
        <>
            <Header search={search} setSearch={setSearch} searchBook={searchBook}/>
            <BookContainer books={bookData}/>

        </>
    )
}

export default App

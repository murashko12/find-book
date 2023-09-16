import { useEffect, useState } from 'react'
import './App.css'
import BookContainer from './components/BookContainer'
import axios from 'axios'
import Header from './components/Header'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Box, Button } from '@mui/material'



function App() {

    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    
    
    const [totalItems, setTotalItems] = useState(0)

    function sortCategories(array,sortType) {

    }

    

    const searchBook=(evt)=>{
        if(evt.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBzMmKAHjxRFwwogI3jidqBkkmDw38ogBw&maxResults=${20}`)
            .then(res => {
                setData(res.data.items)
                setTotalItems(res.data.totalItems)
                
        })
            
            .catch(err => console.log(err))
        }
    }
    // search = 'react'
    // count = 20

    // useEffect(() => {
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBzMmKAHjxRFwwogI3jidqBkkmDw38ogBw&maxResults=20`)
    //     .then(res => setData(res.data.items))
    //     .then(res => console.log(res.data.items))
    //     .catch(err => console.log(err))
    // },[search])
    
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

                categoriesBook={categoriesBook}
                typeBook={typeBook}
            />

                {totalItems 
                ? 
                <Box sx={{
                    backgroundColor: "grey",

                    textAlign: "center"
                }}>
                    <Typography variant="h4" color="white" fontWeight="bold">
                        Found {totalItems} results
                    </Typography> 
                </Box>
                : 
                <></>}

            <BookContainer books={bookData}/>
            
        </>
    )
}

export default App

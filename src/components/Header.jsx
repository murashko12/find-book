import React from 'react'

import { Box, Input, Typography } from '@mui/material'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Header = ({search,setSearch,searchBook,categories, setCategories,sort, setSort}) => {

    
    
    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: 'gray',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            
                  
        }}>
            <Typography variant='h3'
                sx={{
                    color: 'white',
                    marginTop: 2, 
                    fontWeight: 'bold',
                    borderLeft: '4px solid white',
                    borderTop: '4px solid white',
                    
                }}
            >
                FIND BOOK
            </Typography>
            <Input
                sx={{
                    border: '2px solid white', 
                    borderRadius: 2,
                    paddingLeft: 1.7,
                    width: {sm: 400, xs: "90%"},
                    height: 50,
                    fontSize: 22,
                    color: 'white',
                    marginTop: 3,
                    marginBottom: 1,
                    
                }}
                
                disableUnderline
                placeholder="Search..."
                id="basic-input"
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
                
            />
            <Box sx={{
                display: 'flex',
                width: {sm: 400, xs: "90%"},
                justifyContent: 'space-between',
                marginBottom: 2
            }}>
            <FormControl
                sx={{
                    width: "48%"
                }}
            >
                <Typography variant='h5' color='white'>Categories</Typography>
                <Select
                    sx={{
                        border: '2px solid white', 
                        borderRadius: 2,
                        width: "100%",
                        height: 50,
                        fontSize: 22,
                        color: 'white',

                    }}
                    value={categories}
                    defaultValue={categories}
                    onChange={(event) => setCategories(event.target.value)}
                >
                    <MenuItem value={'all'}>all</MenuItem>
                    <MenuItem value={'art'}>art</MenuItem>
                    <MenuItem value={'biography'}>biography</MenuItem>
                    <MenuItem value={'computers'}>computers</MenuItem>
                    <MenuItem value={'history'}>history</MenuItem>
                    <MenuItem value={'medical'}>medical</MenuItem>
                    <MenuItem value={'poetry'}>poetry</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                sx={{
                    width: "48%"
                }}
            >
                <Typography variant='h5' color='white'>Sorted by</Typography> 
                <Select
                    sx={{
                        border: '2px solid white', 
                        borderRadius: 2,
                        width: "100%",
                        height: 50,
                        fontSize: 22,
                        color: 'white'
                    }}
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                    defaultValue={sort}
                >
                    <MenuItem value={'relevance'}>relevance</MenuItem>
                    <MenuItem value={'newest'}>newest</MenuItem>
                </Select>
            </FormControl>

                    





            </Box>

        </Box>
    )
}

export default Header

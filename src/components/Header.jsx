import { Box, Input, Typography } from '@mui/material'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





import React from 'react'


const Header = ({search,setSearch,searchBook}) => {

    const [categories, setCategories] = React.useState('');

    const handleChangeCategories = (event) => {
        setCategories(event.target.value);
    };

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
  

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
            <FormControl>
                <Typography variant='h5' color='white'>Categories</Typography>
                <Select
                    sx={{
                        border: '2px solid white', 
                        borderRadius: 2,
                        width: 190,
                        height: 50,
                        fontSize: 22,
                        color: 'white',

                    }}
                    value={categories}
                    defaultValue={'all'}
                    onChange={handleChangeCategories}
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

            <FormControl>
                <Typography variant='h5' color='white'>Sorted by</Typography> 
                <Select
                    sx={{
                        border: '2px solid white', 
                        borderRadius: 2,
                        width: 190,
                        height: 50,
                        fontSize: 22,
                        color: 'white'
                    }}
                    value={age}
                    onChange={handleChange}
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

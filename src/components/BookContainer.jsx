import BookCard from './BookCard';
import { Box, Grid } from '@mui/material';


export default function RecipeReviewCard({books}) {
  
    return (
            <Box marginTop={40}>
            <Grid 
                
                container 
                spacing={{ xs: 2, md: 10 }} 
                columns={{ xs: 4, sm: 8, md: 16 }}
            >
                {
                    books.map((book) => {
                        return (
                            <Grid key={book.id} item xs={2} sm={4} md={4} sx={{border: "2px solid black", width: 100}}>
                                <BookCard book={book}/>
                            </Grid>
                        )
                    })
                }
            </Grid>

            </Box>
        
            
    );
}
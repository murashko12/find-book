import BookCard from './BookCard';
import { Box, Grid } from '@mui/material';


export default function RecipeReviewCard({books}) {
  
    return (
            <Box marginTop={10}
                paddingLeft={10}
            >
            <Grid 
                container 
                spacing={{ xs: 3, md: 10 }} 
                columns={{ xs: 3, sm: 3, md: 4 }}
            >
                {
                    books.map((book) => {
                        return (
                            <Grid key={book.id} item xs={3} sm={3} md={1} sx={{border: "2px solid black", width: 100}}>
                                <BookCard book={book}/>
                            </Grid>
                        )
                    })
                }
            </Grid>

            </Box>
        
            
    );
}
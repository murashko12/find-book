import BookCard from './BookCard';
import { Box, Grid } from '@mui/material';


export default function RecipeReviewCard({books}) {
  
    return (
            <Box>
            <Grid 
                container  
                columns={{
                    xl: 5, 
                    lg: 4, 
                    md: 3, 
                    sm: 2, 
                    xs: 1
                }}
            >
                {
                    books.map((book) => {
                        return (
                            <Grid 
                                key={book.id} item 
                                xl={1} lg={1} md={1} sm={1} xs={1} 
                                sx={{
                                    border: "2px solid black", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <BookCard book={book}/>
                            </Grid>
                        )
                    })
                }
            </Grid>

            </Box>
    );
}
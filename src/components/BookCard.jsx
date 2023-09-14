import { Box, Card, CardMedia, Typography} from '@mui/material'

import ModalCard from './ModalCard';


const BookCard = ({book}) => {

    return (
        <>        
            <Card sx={{ 
                width: "90%" ,
                height: 500,
                margin: 3,
                backgroundColor: "grey",
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius:4,
                alignItems: 'center'

            }}>

            <Box
                component="img"
                sx={{
                    height: 300,
                    width: 200,
                    objectFit: 'cover'
                }}
                alt="Book cover"
                src={book.volumeInfo.imageLinks.thumbnail}
            />
                <Box sx={{
                    
                    width: "100%",
                    height: "70px",
                    overflowY: "scroll",
                
                }}>
                    <Typography color="white" fontWeight='bold'>{book.volumeInfo.title}</Typography>
                </Box>

                
                <ModalCard book={book}/>
            </Card>
        </>
    )
}

export default BookCard

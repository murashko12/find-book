import { Card, CardMedia} from '@mui/material'

import ModalCard from './ModalCard';


const BookCard = ({book}) => {

    return (
        <>        
            <Card sx={{ 
                width: "90%" ,
                height: 500,
                margin: 3,
                backgroundColor: "grey"
                
            }}>
                <CardMedia
                    component="img"
                    height="400px"
                    image={book.volumeInfo.imageLinks.thumbnail}
                    alt="Book cover"
                />

                
                <ModalCard book={book}/>
            </Card>
        </>
    )
}

export default BookCard

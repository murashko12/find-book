import { Card, CardMedia} from '@mui/material'

import ModalCard from './ModalCard';


const BookCard = ({book}) => {

    return (
        <>        
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    component="img"
                    height="310"
                    image={book.volumeInfo.imageLinks.thumbnail}
                    alt="Book cover"
                />
                
                <ModalCard book={book}/>
            </Card>
        </>
    )
}

export default BookCard

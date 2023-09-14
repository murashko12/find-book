import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 700,
  width: {md: 700, sm: "95%"},
  height: 550,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll'
};

export default function BasicModal({book}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="contained">description</Button>

            <Modal
              open={open}
              onClose={handleClose}
            >
                <Box sx={style}>
                    <Box 
                        component="img"
                        height="310"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt="Book cover"
                    />
                    <Typography variant="h4" component="h2">
                        {book.volumeInfo.title}
                    </Typography>
                    <Box sx={{ 
                        mt: 2,  
                    }}>
                        <Typography>
                            {book.volumeInfo.description}
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
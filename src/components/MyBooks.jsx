import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, SvgIcon, TextField } from "@mui/material"
import React from "react"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Book from "./Book";

import BookImage from '../img/Example_book.png';

export default function MyBooks() {
    const [openAddBook, setOpenAddBook] = React.useState(false);

    const handleClickOpenAddBook = () => {
        setOpenAddBook(true);
    };

    const handleClickCloseAddBook = () => {
        setOpenAddBook(false);
    };
    return (
        <div className="mybooks_container">

            <React.Fragment>
                <Button
                    sx={{
                        backgroundColor: "#c7a292"
                    }}
                    variant="contained"
                    onClick={handleClickOpenAddBook}>
                    <SvgIcon component={LocalLibraryIcon} inheritViewBox /> Ном нэмэх
                </Button>
                <Dialog
                    open={openAddBook}
                    onClose={handleClickCloseAddBook}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData).entries());
                            const email = formJson.email;
                            console.log(email);
                            handleClickCloseAddBook();
                        },
                    }}
                >
                    <DialogTitle>Шинэ ном нэмэх</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Та өөрийн хүссэн номны зураг, нэр болон унших гэж буй зорилгоо бичих боломжтой
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Номын нэр"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="email"
                            label="Тайлбар"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="email"
                            label="Унших гэж буй зорилго"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClickCloseAddBook}>Cancel</Button>
                        <Button type="submit">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

            <Book name="Grokking Algorithm" description="Bla bla" goal="Algorithmdaa lag boloh gj hhe" img={BookImage} />
        </div>
    )
}
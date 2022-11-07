import { useContext, useState } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'blue'
};

export default function MUIEditSongModal() {
    const { store } = useContext(GlobalStoreContext);
    const [ title, setTitle ] = useState(store.currentSong.title);
    const [ artist, setArtist ] = useState(store.currentSong.artist);
    const [ youTubeId, setYouTubeId ] = useState(store.currentSong.youTubeId);

    function handleConfirmEditSong() {
        let newSongData = {
            title: title,
            artist: artist,
            youTubeId: youTubeId
        };
        store.addUpdateSongTransaction(store.currentSongIndex, newSongData);        
    }

    function handleCancelEditSong() {
        store.hideModals();
    }

    function handleUpdateTitle(event) {
        setTitle(event.target.value);
    }

    function handleUpdateArtist(event) {
        setArtist(event.target.value);
    }

    function handleUpdateYouTubeId(event) {
        setYouTubeId(event.target.value);
    }

    return (
        <Dialog
            open={store.currentModal === "EDIT_SONG"}
            sx={{color: 'beige' }}
        >
           <DialogTitle><b>Edit Song</b></DialogTitle>
                <DialogContent
                    id="edit-song-modal-content"
                    className="modal-center">
                    {/* Song Title Field using TextField from MUI */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="edit-song-modal-title-textfield"
                        label="Title:"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={title}
                        onChange={handleUpdateTitle} />
                    {/* Artist Field using TextField from MUI */}
                    <TextField 
                        autoFocus margin = "dense"
                        id="edit-song-modal-artist-textfield" 
                        className='modal-textfield' 
                        label="Artist:"
                        type="text"
                        fullWidth variant="standard"
                        defaultValue={artist} 
                        onChange={handleUpdateArtist} />
                    {/* YouTube Id Field using TextField from MUI */}
                    <TextField 
                        autoFocus margin = "dense"
                        id="edit-song-modal-youTubeId-textfield" 
                        className='modal-textfield' 
                        label="You Tube Id:"
                        type="text" 
                        fullWidth variant="standard"
                        defaultValue={youTubeId} 
                        onChange={handleUpdateYouTubeId} />
                </DialogContent>
                <DialogActions> {/* Confirm and Cancel Buttons */}
                    <Button
                        variant="contained"
                        onClick={handleConfirmEditSong}
                    >
                        Confirm   
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCancelEditSong}
                    >
                        Cancel  
                    </Button>
                </DialogActions>
        </Dialog>
    );
}
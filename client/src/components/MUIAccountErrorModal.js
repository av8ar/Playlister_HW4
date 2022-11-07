import { useContext } from 'react'
import { Alert, AlertTitle, Button, Collapse, IconButton, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from "../auth"

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
}; 

export default function MUIAccountErrorModal() {
    const { auth } = useContext(AuthContext);
    let errMsg = ""
    if(auth.error) {
        errMsg = auth.error
    }

    let handleClick = (event) => {
        auth.closeErrorModal();
    }

    return (
        <Modal
            open={auth.error != null}
        >
            <Collapse in={auth.error != null}>
                <Alert variant="filled" severity="error" action={
                    <IconButton aria-label="close" color="inherit" size="large" onClick={handleClick}>
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                }>
                    <AlertTitle><strong>Error</strong></AlertTitle>
                    <div className="error-modal-dialog">
                        <header className="dialog-header">
                            {errMsg}
                        </header>
                    </div>
                </Alert>
            </Collapse>
        </Modal>
    )

}

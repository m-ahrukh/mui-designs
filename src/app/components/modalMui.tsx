import { CheckBox, CloseOutlined } from "@mui/icons-material"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Modal, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"

export const ModalMui = () => {

  const [open, openChange] = useState(false)
  const functionOpenPopup = () => {
    openChange(true);
  }

  const closePopup = () => {
    openChange(false);
  }
  return (
    <div>
      <Button color="primary" variant="outlined" onClick={functionOpenPopup}>Open PopUp</Button>
      <Modal open={open} onClose={() => openChange(false)}>
        <Box position='absolute' top='50%' left='50%'>
          <Typography>It is a modal</Typography>
          <Button variant="contained" onClick={() => openChange(false)}>Click Me</Button>
        </Box>
      </Modal>
      <br></br>
    </div>
  )
}
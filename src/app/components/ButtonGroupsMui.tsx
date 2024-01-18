import { Button, ButtonGroup, IconButton, Stack } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const ButtonGroupMui = () => {
  return (
    <Stack direction='row'>
      <ButtonGroup variant="outlined" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
        <Button onClick={()=> alert('Left Button CLicked')}>Left</Button>
        <Button onClick={()=> alert('Center Button CLicked')}>Center</Button>
        <Button onClick={()=> alert('Right Button CLicked')}>Right</Button>
      </ButtonGroup>
    </Stack>
  )
}
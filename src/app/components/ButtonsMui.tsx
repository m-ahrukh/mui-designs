import { Button, IconButton, Stack } from "@mui/material"
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

export const ButtonsMui = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant="text">Text</Button>
        <Button variant="contained" disabled>Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="success">Success</Button>
      </Stack>

      <Stack display='block' spacing={2} direction='row'>
        <Button variant="outlined" size="small">Small</Button>
        <Button variant="outlined" size="medium">Medium</Button>
        <Button variant="outlined" size="large">Large</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant="outlined" startIcon={<SendIcon />} disableRipple onClick={() => alert('Button Clicked')}>Send</Button>
        <Button variant="outlined" endIcon={<SendIcon />} disableElevation>Send</Button>
        <IconButton aria-label="Send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    </Stack>
  )
}
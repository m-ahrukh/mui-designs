import * as React from 'react';
import { Stack, Typography, styled } from '@mui/material';

const StylesTypography = styled(Typography, {})(({theme})=>({
    borderRadius: 4,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    backgroundColor: 'thistle',
    maxHeight: '3rem',
    padding: 4,
    margin: 8,
    fontStyle: 'italic',
    fontWeight: 'bold',
}))

const defaultSettings = {
  border: '1px solid black',
  backgroundColor: '#fcba03',
  width: 300,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center'
}

export default function TypographyStyles() {
  return (
      <div>
        <Stack direction='row' sx={defaultSettings}>
            <StylesTypography noWrap>Aligned Typography</StylesTypography>
        </Stack>
        <br></br>
      </div>
  );
}
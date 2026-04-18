import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';


const App = () => {
  return (
    <>
      <h1>Meterial UI Demo</h1>
      <Button variant="contained">Contained</Button> <br /> <br />
      <Button variant="contained" color="success"> Success</Button> <br /> <br />
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button> <br /> <br />
      <Alert severity="warning">This is a warning Alert.</Alert>

    </>
  )
}

export default App

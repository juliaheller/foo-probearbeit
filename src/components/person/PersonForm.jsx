import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function PersonForm() {
   const [dob, setDob] = React.useState(new Date());

  const handleChange = (newValue) => {
    setDob(newValue);
  };
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
  
      }}>
      <Box fullWidth sx={{
       border: 'solid 1px black',
        borderRadius: 5,
      padding: 5
      }}>
        <Typography variant="h4">
  Angaben zur Person
</Typography>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
        <InputLabel id="form-gender">Anrede</InputLabel>
            <Select
              fullWidth
          labelId="form-gender"
          id="gender-select"
           value="Herr"
          label="Anrede"
          // onChange={handleChange}
        >
          <MenuItem value="Frau">Frau</MenuItem>
          <MenuItem value="Herr">Herr</MenuItem>
          <MenuItem value="Divers">Divers</MenuItem>
        </Select>
  </Grid>
  <Grid item xs={6}>
          <InputLabel id="form-titel">Titel</InputLabel>
            <Select
              fullWidth
          labelId="form-titel"
          id="titel-select"
           value="Dr."
          label="AnreTitTitelelde"
          // onChange={handleChange}
        >
          <MenuItem value="Dr.">Dr.</MenuItem>
          <MenuItem value="Prof.">Prof.</MenuItem>
          <MenuItem value="Dr. Dr.">Dr. Dr.</MenuItem>
        </Select>
  </Grid>
  <Grid item xs={6}>
   <InputLabel id="form-name">Vorname</InputLabel>
  <TextField fullWidth id="outlined-basic" variant="outlined" />
  </Grid>
  <Grid item xs={6}>
   <InputLabel id="form-surname">Nachname</InputLabel>
  <TextField fullWidth id="outlined-basic" variant="outlined" />
      </Grid>
      
      <Grid item xs={6}>
   <InputLabel id="form-birthdate">Geburstdatum</InputLabel>
            <DesktopDatePicker
              fullWidth
          inputFormat="MM/DD/yyyy"
          value={dob}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
      <Grid item xs={6}>
   <InputLabel id="form-pob">Geburtsort</InputLabel>
  <TextField fullWidth id="outlined-basic" variant="outlined" />
      </Grid> 
        </Grid>
        </Box>
      <Box fullWidth sx={{
       border: 'solid 1px black',
        borderRadius: 5,
       padding: 5
      }}>
        <Typography variant="h4">
  Andresse
</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
         <InputLabel id="form-street">Strasse</InputLabel>
  <TextField fullWidth id="outlined-basic" variant="outlined" />
  </Grid>
  <Grid item xs={6}>
  <InputLabel id="form-zipcode">Postleitzahl</InputLabel>
  <TextField fullWidth id="outlined-basic" variant="outlined" />
  </Grid>
  <Grid item xs={6}>
   <InputLabel id="form-place">Ort</InputLabel>
  <TextField fullWidth id="outlined-basic" variant="outlined" />
      </Grid>
      
      <Grid item xs={6}>
  <InputLabel id="form-country">Land</InputLabel>
            <Select
              fullWidth
          labelId="form-country"
          id="country-select"
          value="Deutschland"
          label="Land"
          // onChange={handleChange}
        >
          <MenuItem value="Deutschland">Deutschland</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Frankreich">Frankreich</MenuItem>
        </Select>
      </Grid>
     
      
        </Grid>
      </Box>
      <Box sx={{
      display: "flex",
        alignSelf: "flex-end",
     padding: 3
  
      }}>
       
           <Button variant="outlined">Zuruecksetzen</Button>
          <Button variant="outlined">Speichern</Button>
       
         </Box>
      
      </Box>
 
  );
}

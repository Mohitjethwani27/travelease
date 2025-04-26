import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import GroupIcon from '@mui/icons-material/Group';

export default function SearchBar() {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: '10px',
        borderRadius: '20px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        gap: '20px',
        width: 'fit-content',
        margin: 'auto'
      }}
    >
      {/* Location Input */}
      <FormControl variant="standard">
        <InputLabel htmlFor="location-input">Location</InputLabel>
        <Input
          id="location-input"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon sx={{ color: 'orange' }} />
            </InputAdornment>
          }
        />
      </FormControl>

      {/* Distance Input */}
      <FormControl variant="standard">
        <InputLabel htmlFor="distance-input">Distance (km/m)</InputLabel>
        <Input
          id="distance-input"
          startAdornment={
            <InputAdornment position="start">
              <SocialDistanceIcon sx={{ color: 'orange' }} />
            </InputAdornment>
          }
        />
      </FormControl>

      {/* Max People Input */}
      <FormControl variant="standard">
        <InputLabel htmlFor="people-input">Max People</InputLabel>
        <Input
          id="people-input"
          startAdornment={
            <InputAdornment position="start">
              <GroupIcon sx={{ color: 'orange' }} />
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
  variant="contained"
  sx={{
    backgroundColor: '#E65100 !important', // Force orange background
    '&:hover': {
      backgroundColor: '#e69550', // Darker shade on hover
    },
    borderRadius: '50%',
    minWidth: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <SearchIcon sx={{ color: 'white' }} />
</Button>


    </Box>
  );
}

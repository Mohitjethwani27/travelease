import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Design({name}) {  // ✅ Component name starts with uppercase
  return (
    <Box
    sx={{
      display: "inline-block", 
   // Ensures it takes the full width of the container
      padding: "0px",  
      borderRadius: "20px",  
      backgroundColor: "orange", 
      marginLeft:'40px'   
    }}
    >
      <Typography
        sx={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: '42px',  // Adjust size as needed
          marginLeft: 'px',
          fontWeight: 700,  // Bold style
          color: 'black',  // Text color to black
          letterSpacing: '5px', // Adds spacing
          textAlign: 'center',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

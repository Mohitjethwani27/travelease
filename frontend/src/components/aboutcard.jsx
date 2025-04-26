import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

function AboutCard({ cards }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid layout
        gap: 5,
        padding: 2,

      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          sx={{
            height: '100%',
            position: 'relative',
            padding: 2,
            border: '2px solid orange',
            borderRadius: '12px',
            boxShadow: '4px 4px 15px rgba(255, 165, 0, 0.5)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '6px 6px 20px rgba(255, 140, 0, 0.7)',
              transform: 'scale(1.03)',
            },
          }}
        >
          <CardActionArea>
            {/* Logo Section */}
            <CardMedia
              component="img"
              image={card.logo}
              alt={`${card.title} logo`}
              sx={{
                width: 50,
                height: 50,
                position: 'absolute',
                top: 10,
                left: 10,
              }}
            />
            <CardContent sx={{ paddingTop: 8 }}>  {/* Increased padding here */}
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default AboutCard;

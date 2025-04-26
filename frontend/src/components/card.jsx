import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Review from './review_card';

const cards = [
  {
    id: 1,
    title: 'Calculate Weather',
    description: 'Get real-time weather updates and forecasts based on your location.',
    logo: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
  },
  {
    id: 2,
    title: 'Best Tour Guide',
    description: 'Discover top destinations with expert travel guides and recommendations.',
    logo: 'https://tse4.mm.bing.net/th?id=OIP.0X5zKIqxI7zBD2_HjX-FJgHaHa&pid=Api',
  },
  {
    id: 3,
    title: 'Customisation',
    description: 'Personalize your experience with customizable themes and settings.',
    logo: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Ensures three cards in a row
        gap: 3,
        padding: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          sx={{
            height: '100%',
            position: 'relative',
            padding: 2,
            border: '2px solid orange', // Orange border
            borderRadius: '12px', // Rounded corners
            boxShadow: '4px 4px 15px rgba(255, 165, 0, 0.5)', // Soft shadow effect
            transition: 'all 0.3s ease-in-out', // Smooth hover effect
            '&:hover': {
              boxShadow: '6px 6px 20px rgba(255, 140, 0, 0.7)', // Stronger shadow on hover
              transform: 'scale(1.03)', // Slight zoom on hover
            },
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              paddingTop: 5, // Adjust to prevent text overlapping logo
              '&[data-active]': {
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
              },
            }}
          >
            {/* Logo Section at Top Left */}
            <CardMedia
              component="img"
              image={card.logo}
              alt={`${card.title} logo`}
              sx={{
                width: 50, // Adjust size as needed
                height: 50,
                position: 'absolute',
                top: 10,
                left: 10,
              }}
            />

            <CardContent>
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

export default SelectActionCard;

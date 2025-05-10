import React, { useState, useEffect } from 'react';
import { useUser } from '../assets/userstate';
import { useNavigate } from 'react-router-dom'; // <--- import useNavigate

export default function MyBookings() {
  const { user } = useUser();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // <--- initialize

  useEffect(() => {
    if (!user) return;
    if (!user.email) {
      window.location.href = '/login';
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/bookings/${encodeURIComponent(user.email)}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data.bookings);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError('Failed to load bookings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  if (!user) return null;
  if (loading) return <p>Loading your bookings...</p>;
  if (error) return <p>{error}</p>;
  if (bookings.length === 0) return <p>You have no bookings yet.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Your Bookings</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            onClick={() => navigate(`/mybookings/${booking._id}`)}
            
// <--- go to booking details
            style={{
              width: '260px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              cursor: 'pointer', // <--- make it look clickable
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={booking.image || 'https://via.placeholder.com/260x160'}
              alt={booking.name}
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem' }}>
                {booking.name}
              </h3>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                📦 {booking.packageType}
              </p>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                📅 {new Date(booking.date).toLocaleDateString()}
              </p>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                👨‍👩‍👧‍👦 {booking.adults} Adults, {booking.children} Children
              </p>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                💰 {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(booking.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

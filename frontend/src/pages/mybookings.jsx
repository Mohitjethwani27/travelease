import React, { useState, useEffect } from 'react';
import { useUser } from '../assets/userstate';

export default function MyBookings() {
  const { user } = useUser();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (bookings.length === 0) return <p>You have no bookings.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Your Bookings</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            style={{
              width: '260px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: '#fff'
            }}
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
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                🛎 Services:{' '}
                {booking.services && booking.services.length > 0
                  ? booking.services.join(', ')
                  : 'None'
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

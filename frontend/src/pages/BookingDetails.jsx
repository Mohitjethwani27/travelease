//page which appear after clciking on any card in mybooking section

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/mybookings/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch booking');
        }
        const data = await response.json();
        setBooking(data.booking);
      } catch (err) {
        console.error('Error fetching booking:', err);
        setError('Failed to load booking details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>{error}</p>;
  if (!booking) return <p>No booking found.</p>;

  const validAdults = booking.adultDetails?.filter(adult => adult.name && adult.name.trim() !== '') || [];
  const validChildren = booking.childrenDetails?.filter(child => child.name && child.name.trim() !== '') || [];

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5' 
    }}>
      <div style={{
        width: '400px',
        background: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontWeight: '600',
          fontSize: '24px',
        }}>
          Booking Details
        </h2>

        <img
          src={booking.image || 'https://via.placeholder.com/400x250'}
          alt={booking.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '1.5rem',
          }}
        />

        {/* Booking Info */}
        {[
          { label: 'Name', value: booking.name },
          { label: 'Package Type', value: booking.packageType },
          { label: 'Date', value: new Date(booking.date).toLocaleDateString() },
          { label: 'Price', value: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(booking.price) },
          { label: 'People', value: `${booking.adults} Adults, ${booking.children} Children` },
          { label: 'Transaction ID', value: booking.transactionID }
        ].map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <strong>{item.label}:</strong>
            <div style={{ backgroundColor: '#f0f4ff', padding: '8px', borderRadius: '6px', marginTop: '4px', wordBreak: 'break-word' }}>
              {item.value}
            </div>
          </div>
        ))}

        {/* Services Section */}
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Services</h4>
          <div style={{ backgroundColor: '#f0f4ff', padding: '10px', borderRadius: '6px' }}>
            {booking.services && booking.services.length > 0 ? (
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {booking.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            ) : (
              <p>No extra services selected.</p>
            )}
          </div>
        </div>

        {/* Adult Details Section */}
        {validAdults.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Adult Details</h4>
            <div style={{ backgroundColor: '#f0f4ff', padding: '10px', borderRadius: '6px' }}>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {validAdults.map((adult, idx) => (
                  <li key={idx}>{adult.name} ({adult.age} yrs)</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Children Details Section */}
        {validChildren.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Children Details</h4>
            <div style={{ backgroundColor: '#f0f4ff', padding: '10px', borderRadius: '6px' }}>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {validChildren.map((child, idx) => (
                  <li key={idx}>{child.name} ({child.age} yrs)</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Back Button */}
        <button
          style={{
            marginTop: '2rem',
            width: '100%',
            backgroundColor: '#FFA500',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '16px'
          }}
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

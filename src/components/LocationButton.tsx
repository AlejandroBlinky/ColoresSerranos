"use client"
import React from 'react';

const ShowLocationButton = () => {
  const handleShowLocationClick = () => {
    const coordinates = '-31.145143238334636,-64.47958778650543'; // Las coordenadas en el formato latitud,longitud
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña
  };

  return (
    <button
      className='btn btn-outline-dark bg-dark shadow text-white fs-4'
      onClick={handleShowLocationClick}
    >
      Mostrar ubicación
    </button>
  );
};

export default ShowLocationButton;

"use client"


import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import Overlay from 'ol/Overlay';
import marcador from '../app/img/mapmarker.png'

const OpenLayersMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new Map({
        target: mapContainer.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([-64.47958778650543, -31.145143238334636]),
          zoom: 16,
        }),
      });

      const markerLocations = [
        { coordinate: [-64.47958778650543, -31.145143238334636] },
        // Agrega más ubicaciones de marcadores según sea necesario
      ];

      markerLocations.forEach((location) => {
        const marker = new Feature({
          geometry: new Point(fromLonLat(location.coordinate)),
        });
        marker.setStyle(
          new Style({
            image: new Icon({
              src: marcador.src, // Agrega la URL de la imagen del marcador
              scale: 0.5, // Escala opcional del icono
            }),
          })
        );

        const markerElement = createMarkerElement();
        const overlay = new Overlay({
          position: fromLonLat(location.coordinate),
          element: markerElement,
        });
        map.addOverlay(overlay);
      });

      return () => map.dispose();
    }
  }, []);

  const createMarkerElement = () => {
    const link = document.createElement('a');
    const image = document.createElement('img');
    image.src = marcador.src; // Agrega la URL de la imagen del marcador
    image.alt = 'Marcador';
    image.style.width = '5vh';
    image.style.height = 'auto';
    link.appendChild(image);
    return link;
  };

  return <div ref={mapContainer} className="p-0 m-0" style={{ width: '100%', height: '50vh' }}></div>;
};

export default OpenLayersMap;
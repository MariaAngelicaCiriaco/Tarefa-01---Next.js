'use client'

import { useContext } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";

const galleryImages = [
  '/images/photo1.png' // Corrigido para o caminho correto
];

export default function Home() {
  const {
    contador,
    incremento,
    playing,
    togglePlaying,
    showGallery
  } = useContext(HomeContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{contador}</h1>
      <div className="flex flex-row items-center mb-6">
        <button onClick={togglePlaying} className="flex flex-row items-center space-x-2">
          {
            playing ? 
            (<FaPause className="text-[50px] text-[tomato]" />) : 
            (<FaPlay className="text-[50px] text-[green]" />)
          }
          <span className="text-[24px]">
            {playing ? 'Executando' : 'Pausado'}
          </span>
        </button>
      </div>

      {showGallery && (
        <div className="gallery">
          {galleryImages.map((src, index) => (
            <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
          ))}
        </div>
      )}
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .gallery-image {
          width: 200px;
          height: 150px;
          object-fit: cover;
        }
      `}</style>

    </main>
  );
}

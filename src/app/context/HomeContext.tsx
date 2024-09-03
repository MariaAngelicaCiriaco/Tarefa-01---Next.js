'use client'

import React, { createContext, ReactNode, useState } from 'react';

type HomeContextData = {
    contador: number;
    incremento: () => void;
    playing: boolean;
    togglePlaying: () => void;
    showGallery: boolean;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({ children }: ProviderProps) => {
    const [contador, setContador] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    const incremento = () => {
        setContador(contador + 1);
    }

    const togglePlaying = () => {
        const newPlaying = !playing;
        setPlaying(newPlaying);
        setShowGallery(newPlaying); // Atualiza showGallery com base no novo valor de playing
    }

    return (
        <HomeContext.Provider value={{
            contador,
            incremento,
            playing,
            togglePlaying,
            showGallery
        }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;

import { FC, ReactNode, useState } from 'react';

import { FavoritesContext } from '../context/favorites';

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  let restoreFavorites: number[] = [];

  if (typeof window !== 'undefined') {
    const getFavorites = localStorage.getItem('favorites');
    restoreFavorites = getFavorites
      ? JSON.parse(getFavorites)
      : restoreFavorites;
  }

  const [favorites, setFavorites] = useState<number[]>(restoreFavorites);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites: (newFavs: number[]): void => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('favorites', JSON.stringify(newFavs));
          }
          setFavorites(newFavs);
        },
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

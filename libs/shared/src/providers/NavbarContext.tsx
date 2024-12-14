import { FC, ReactNode, useState } from 'react';

import { NavbarContext } from '../context/navbar';

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean | null>(null);
  return (
    <NavbarContext.Provider value={{ expanded, setExpanded } as any}>
      {children}
    </NavbarContext.Provider>
  );
};

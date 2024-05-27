import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface AccordionContextType {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const AccordionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
};
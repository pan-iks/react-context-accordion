import { FC, ReactNode } from 'react';
import { AccordionProvider, useAccordion } from './AccordionContext';

interface AccordionProps {
  children: ReactNode;
}

const Accordion: FC<AccordionProps> & {
  Item: FC<ItemProps>;
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
} = ({ children }) => {
  return (
    <AccordionProvider>
      <div className="accordion">{children}</div>
    </AccordionProvider>
  );
};

interface ItemProps {
  index: number;
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ children }) => {
  return <div className="accordion-item">{children}</div>;
};

interface HeaderProps {
  index: number;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ index, children }) => {
  const { openIndex, setOpenIndex } = useAccordion();

  const handleClick = () => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-header" onClick={handleClick}>
      {children}
    </div>
  );
};

interface BodyProps {
  index: number;
  children: ReactNode;
}

const Body: FC<BodyProps> = ({ index, children }) => {
  const { openIndex } = useAccordion();
  return openIndex === index ? <div className="accordion-body">{children}</div> : null;
};

// Přiřadíme podkomponenty jako statické členy hlavní komponenty Accordion
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
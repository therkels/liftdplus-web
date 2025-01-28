import { useState } from 'react';
import clsx from 'clsx';

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion(props: AccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="bg-primaryBlue text-black transition-all">
      <div 
        onClick={() => setIsActive(!isActive)}
        className="flex flex-row text-5xl p-2 justify-between cursor-pointer"
      >
        <p className="flex-3 ml-10">{props.title}</p>
        <div className="mr-10"><p>{isActive ? "-" : "+"}</p></div>
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          {
            "max-h-0 opacity-0": !isActive,
            "max-h-screen opacity-100": isActive,
          }
        )}
        // Inline style for more control over transitions if needed
        style={{
          transitionProperty: "max-height, opacity",
        }}
      >
        <div className="ml-10 px-2 py-1 mr-96">
          <p className="text-lg">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}
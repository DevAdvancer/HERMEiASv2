import React from 'react';

const Section = ({
  id,
  children,
  className = '',
  padding = 'py-16 md:py-24',
  background = 'bg-black',
  overlay = false,
  container = true,
  containerClassName = '',
  component: Component = 'section'
}) => {
  // Base classes for the section
  const baseClasses = `
    relative
    ${padding}
    ${background}
    ${className}
  `;

  // Container classes for consistent max-width and padding
  const containerClasses = `
    ${container ? 'container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12' : ''}
    ${containerClassName}
  `;

  return (
    <Component id={id} className={baseClasses}>
      {overlay && (
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}
      <div className={containerClasses}>
        {children}
      </div>
    </Component>
  );
};

export default Section;
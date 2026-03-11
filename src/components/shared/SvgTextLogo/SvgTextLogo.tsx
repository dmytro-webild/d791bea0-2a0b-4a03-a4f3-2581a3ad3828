import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: string;
  fill?: string;
  dominantBaseline?: 'auto' | 'middle' | 'hanging' | 'alphabetic' | 'central' | 'mathematical';
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = '700',
  fill = 'currentColor',
  dominantBaseline = 'middle',
}) => {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={text}
    >
      <text
        x="100"
        y="30"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        textAnchor="middle"
        dominantBaseline={dominantBaseline}
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
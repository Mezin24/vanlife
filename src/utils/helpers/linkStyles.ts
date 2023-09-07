import { CSSProperties } from 'react';

export const linkStyles = ({ isActive }: { isActive: boolean }) => {
  const style: CSSProperties = {};
  if (isActive) {
    style.color = '#161616';
    style.textDecoration = 'underline';
    style.fontWeight = 600;
  }

  return style;
};

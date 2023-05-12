import React from 'react';
import { StyButton } from './style';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TestButton = ({
  label,
  ...props
}: ButtonProps) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log(count);
  }, [count])

  return (
    <StyButton
      {...props}
      type="button"
      onClick={() =>
        setCount(count + 1)
      }
    >
      {label}
    </StyButton>
  );
};

import { ComponentChildren } from 'preact';
import { useMemo } from 'preact/hooks';
import { IReusableComponent } from '../types/IReusableComponent';

interface IButton extends IReusableComponent {
    variant?: 'primary' | 'secondary' | 'tertiary',
    type?: 'button' | 'submit',
    onClick?: () => undefined,
    children: ComponentChildren,
}

function Button({
  className,
  variant = 'primary', type = 'button', onClick, children,
} : IButton) {
  const classes = useMemo((): Array<string> => {
    switch (variant) {
      case 'tertiary': {
        return [
          'rounded-full',
          'text-brand-500',
          'px-4',
          'py-2',
          'hover:bg-brand-900',
        ];
      }
      case 'secondary': {
        return [
          'rounded-full',
          'text-brand-500',
          'px-4',
          'py-2',
          'bg-brand-900',
          'hover:bg-brand-800',
        ];
      }

      case 'primary':
      default: {
        return [
          'rounded-full',
          'text-white',
          'px-4',
          'py-2',
          'bg-brand-500',
          'hover:bg-brand-400',
        ];
      }
    }
  }, [variant]);

  return (
    <button
      className={`${classes.join(' ')} ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      { children }
    </button>
  );
}

export { Button };

import { JSXInternal } from 'preact/src/jsx';
import { IReusableComponent } from '../types/IReusableComponent';

interface IInput extends IReusableComponent {
    placeholder?: string,
    type?: 'text' | 'number' | 'email' | 'password',
    // eslint-disable-next-line no-unused-vars
    onChange?: JSXInternal.GenericEventHandler<HTMLInputElement>,
    required: boolean,
}

function Input({
  id,
  className,
  name,
  type = 'text',
  onChange,
  placeholder,
  required,
}: IInput) {
  return (
    <input
      id={id}
      className={`rounded-md px-2 py-1 text-sm border border-gray-300 placeholder:text-gray-400 focus:border-brand-300 hover:border-brand-300   ${className}`}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
}

export { Input };

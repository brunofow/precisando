import { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import styles from '../../styles/Components/Input.module.css';

type Props = {
  placeholder?: string;
  type?: string;
  name: string;
}

function InputComponent({placeholder, type, name, ...rest}: Props) {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: ref => {
        return ref.value;
      },
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <div className={styles.inputBox}>
      <input 
        name={name}
        id={name} 
        type={type}
        ref={inputRef}
        placeholder="‎‎ ‎"
        {...rest}
      />
      <label className={name} htmlFor={name}>{placeholder}</label>
    </div>
  )
}

export default InputComponent
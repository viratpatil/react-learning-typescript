import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { ImportsNotUsedAsValues } from 'typescript';


interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    onChange: (value: string) => void;
}

export type Book = {
  id: string;
  title: string;
}

export type Movie = {
  id: string;
  title: string;
  releaseDate: string;
}

interface GenericProps<T> {
  values: T[];
  onChange: (value: T) => void;
}

interface Base {
  id: string;
  title: string;
}


const test = <T,>(val: T): T => {
  return val;
}


// function Select({ options, onChange }: SelectProps) {
//   const [value, setValue] = useState(options[0]?.value);

//   function handleChange(event: ChangeEvent<HTMLSelectElement>) {
//     setValue(event.target.value);
//     onChange(event.target.value);
//   }

//   return (
//     <select value={value} onChange={handleChange}>
//       {options.map((option : SelectOption) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default Select;

export const GenericSelect = <T extends Base>({values, onChange}: GenericProps<T>) => {

  const onSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const val = values.find((value) => value.id === e.currentTarget.value);

    if (val) onChange(val);
  };

    return (
    <select onChange={onSelectChange}>
      {values.map((value) => (
        <option key={value.id} value={value.id}>
          {value.title}
        </option>
      ))}
    </select>
  );

}

// `Select` usage
const mockOptions  = [
  { value: 'banana', label: 'Banana 🍌' },
  { value: 'apple', label: 'Apple 🍎' },
  { value: 'coconut', label: 'Coconut 🥥' },
  { value: 'watermelon', label: 'Watermelon 🍉' },
];

// function Form() {
//   return <Select options={mockOptions} />;
// }
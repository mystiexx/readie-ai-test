import React from "react";

interface TextInputProps {
  onBlur?: any;
  handleChange?: () => void;
  name?: string;
  value?: string | any;
  required?: boolean;
  placeholder?: string;
  labels?: any[];
}

export const TextInput: React.FC<TextInputProps> = ({
  onBlur,
  handleChange,
  name,
  value,
  placeholder,
  required,
}) => {
  return (
    <input
      onBlur={onBlur}
      value={value}
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      required={required}
      className="border border-zircon p-2 min-h-10 text-blue-whale placeholder:text-zircon rounded-xl focus:border focus:border-dodger-blue outline-none duration-700 ease-in-out focus:border-opacity-50 focus:shadow-solitude focus:ring focus:ring-dodger-blue focus-within:ring-opacity-30"
    />
  );
};

export const SelectInput: React.FC<TextInputProps> = ({
  onBlur,
  handleChange,
  name,
  value,
  placeholder,
  required,
  labels,
}) => {
  return (
    <select
      onBlur={onBlur}
      value={value}
      onChange={handleChange}
      name={name}
      required={required}
      className="border border-zircon w-full p-2 min-h-10 text-blue-whale placeholder:text-zircon rounded-xl focus:border focus:border-dodger-blue outline-none duration-700 ease-in-out focus:border-opacity-50 focus:shadow-solitude focus:ring focus:ring-dodger-blue focus-within:ring-opacity-30"
    >
      <option value='' selected disabled>{placeholder}</option>
      {labels?.map((value, idx) => (
        <option key={idx} value={value}>
          {value || value?.jobRoleName || value.industryName}
        </option>
      ))}
    </select>
  );
};

export const TextArea: React.FC<TextInputProps> = ({
  onBlur,
  handleChange,
  name,
  value,
  placeholder,
  required,
}) => {
  return (
    <textarea
      onBlur={onBlur}
      value={value}
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      required={required}
      className="border border-zircon w-full p-2 min-h-10 text-blue-whale placeholder:text-zircon rounded-xl focus:border focus:border-dodger-blue outline-none duration-700 ease-in-out focus:border-opacity-50 focus:shadow-dodger-blue focus:ring focus:ring-dodger-blue focus-within:ring-opacity-30"
    />
  );
};

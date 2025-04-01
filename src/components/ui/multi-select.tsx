import { useState } from "react";

import { Iconify } from "src/components/iconify";
import { Checkbox } from "src/components/ui/checkbox";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "src/components/ui/popover";

import { cn } from "src/lib/utils";

import { Doctor, Option } from "src/types/patient-form";

interface MultiSelectProps {
  options: Option[] | Doctor[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select items",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    const newValue = value.includes(selectedValue)
      ? value.filter((v) => v !== selectedValue)
      : [...value, selectedValue];

    onChange(newValue);
  };

  const selectedNames = options
    .filter((option) => value.includes(option.id))
    .map((option) => option.name)
    .join(", ");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-2 border rounded-md shadow-sm bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <span className="text-left">
            {value.length > 0 ? selectedNames : placeholder}
          </span>
          <Iconify icon="tabler:chevron-down" size={24} className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" side="bottom" className="p-2 w-64">
        {options.length === 0 ? (
          <div className="text-sm text-gray-500 p-2">No options available</div>
        ) : (
          options.map((option) => (
            <div
              key={option.id}
              className={cn(
                "flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded-md",
                value.includes(option.id) && "bg-gray-200"
              )}
              onClick={() => handleSelect(option.id)}
            >
              <Checkbox checked={value.includes(option.id)} />
              <span className="text-sm">{option.name}</span>
            </div>
          ))
        )}
      </PopoverContent>
    </Popover>
  );
}

// Define the type for individual field configurations
export type FieldConfig = {
    label: string;
    type: string;
    required: boolean;
    placeholder?: string;
    className?: string;
    options?: string[];
    accept?: string;
    text?: string;
    icon: string
    value: string
};

// Define the type for the entire FormFieldList object
export type FormFieldListType = {
    [key: string]: FieldConfig;
}

export type FormFieldsList = (FieldConfig & { id: number })[]
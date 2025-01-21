declare module 'flexi-form-builder' {
    import { FC } from 'react';

    export type FieldConfig = {
        label: string;
        type: string;
        required: boolean;
        placeholder?: string;
        className?: string;
        options?: string[];
        accept?: string;
        text?: string;
        icon: string;
        value: string;
    };

    export type FormFieldsList = (FieldConfig & { id: number })[];

    export interface FormBuilderProps {
        onGetFormJson: (data: FormFieldsList) => void;
    }

    export const FormBuilder: FC<FormBuilderProps>;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
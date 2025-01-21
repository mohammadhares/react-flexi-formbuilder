import { FormFieldListType } from "../../type";

export const FormFieldList: FormFieldListType = {
    textField: {
        label: 'Text Field',
        type: 'text',
        required: false,
        placeholder: 'Enter text',
        className: '',
        value: '',
        icon: 'pencil' // Icon for text field
    },
    numberField: {
        label: 'Number Field',
        type: 'number',
        required: false,
        placeholder: 'Enter number',
        className: '',
        value: '',
        icon: 'hashtag' // Icon for number field
    },
    urlField: {
        label: 'Url Field',
        type: 'url',
        required: false,
        placeholder: 'Enter url',
        className: '',
        value: '',
        icon: 'link' // Icon for URL field
    },
    dateField: {
        label: 'Date Field',
        type: 'date',
        required: false,
        placeholder: 'Select a date',
        className: '',
        value: '',
        icon: 'calendar' // Icon for date field
    },
    fileField: {
        label: 'File Field',
        type: 'file',
        required: false,
        options: [".jpg", ".png"],
        className: '',
        value: '',
        icon: 'upload' // Icon for file upload
    },
    selectField: {
        label: 'Select Field',
        type: 'select',
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3'],
        placeholder: 'Choose an option',
        className: '',
        value: '',
        icon: 'list' // Icon for dropdown/select field
    },
    textArea: {
        label: 'Text Area',
        type: 'textarea',
        required: false,
        placeholder: 'Enter detailed text',
        className: '',
        value: '',
        icon: 'file-text' // Icon for text area
    },
    emailField: {
        label: 'Email Field',
        type: 'email',
        required: false,
        placeholder: 'Enter your email',
        className: '',
        value: '',
        icon: 'envelope' // Icon for email field
    },
    checkBox: {
        label: 'Check Box',
        type: 'checkbox',
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3'],
        className: '',
        value: '',
        icon: 'checksquare' // Icon for checkbox
    },
    radioButton: {
        label: 'Radio Button',
        type: 'radio',
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3'],
        className: '',
        value: '',
        icon: 'circle' // Icon for radio button
    }
};


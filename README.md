
---

# react-flexi-formbuilder

A flexible form builder for React projects. Easily create and customize forms with this library. 

---

## Features
- Build dynamic forms by defining fields and their properties.
- Supports various input types, including text, radio buttons, checkboxes, and more.
- Easily customize and extend field configurations.
- Export form data in JSON format.

---

## Demo

![Form Builder Preview](https://codewithharis.com/images/react-flexi-formbuilder.png)

---

## Installation

To install `react-flexi-formbuilder`, run the following command:

```bash
npm install react-flexi-formbuilder
```

or

```bash
yarn add react-flexi-formbuilder
```

---

## Usage

### Basic Example

To use the form builder, import it into your React component:

```jsx
import React, { useState } from 'react';
import FormBuilder from 'react-flexi-formbuilder';
import { FormFieldsList } from 'react-flexi-formbuilder/dist/types/type';
import 'react-flexi-formbuilder/dist/index.css'; 

const MyFormComponent = () => {
  const [formJson, setFormJson] = useState(null);

  const handleGetFormJson = (data : FormFieldsList) => {
    setFormJson(data);
    console.log(data); // Form JSON data
  };

  return (
    <div>
      <FormBuilder onGetFormJson={handleGetFormJson} />
      <pre>{JSON.stringify(formJson, null, 2)}</pre>
    </div>
  );
};

export default MyFormComponent;
```

### Form Field Types

`react-flexi-formbuilder` supports a variety of field types. Here are some examples of how you can use them:

---

1. **Text Input**:
   - A simple text input field for entering values.

2. **Number Field**:
   - A field for entering numeric values.

3. **Email Field**:
   - A field for entering an email address.

4. **URL Field**:
   - A field for entering a URL.

5. **File Field**:
   - A field for uploading files.

6. **Date Field**:
   - A field for selecting a date.

7. **Checkbox**:
   - A checkbox to allow users to select options.

8. **Radio Buttons**:
   - Use radio buttons for selecting one option from a list.

9. **Select Dropdown**:
   - A dropdown field for selecting an option from a list.

10. **Text Area**:
   - A multi-line input for entering detailed text.

---

## Props

The `FormBuilder` component accepts the following props:

| Prop             | Type        | Description                                              |
| ---------------- | ----------- | -------------------------------------------------------- |
| `onGetFormJson`  | `function`  | Callback function to get the form data in JSON format.   |

---

## Customizing the Styles

To apply custom styles to your form, you can simply include the `index.css` file in your project:

```javascript
import 'react-flexi-formbuilder/dist/index.css'; 
;
```

Alternatively, you can override the styles by adding custom CSS in your project.

---

## Dependencies

This package depends on the following:

- **React** (v18.0.0 or higher)

---

## License

MIT License. See the [LICENSE](./LICENSE) file for details.

---
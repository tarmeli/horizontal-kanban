const registerFormData = {
  title: 'Register',
  inputs: [
    {
      className: 'form__control form__control--text',
      type: 'text',
      name: 'email',
      id: 'email',
      required: true,
      inputType: 'input',
      placeholder: 'Email*',
    },
    {
      className: 'form__control form__control--text',
      type: 'text',
      name: 'name',
      id: 'name',
      required: true,
      inputType: 'input',
      placeholder: 'Screen Name*',
    },
    {
      className: 'form__control form__control--text',
      type: 'password',
      name: 'password',
      id: 'password',
      required: true,
      inputType: 'input',
      placeholder: 'Password*',
    },
    {
      className: 'button button--wide',
      type: 'submit',
      name: 'submit',
      id: 'submit',
      required: true,
      inputType: 'input',
      value: 'Register',
    },
  ],
};

export { registerFormData };

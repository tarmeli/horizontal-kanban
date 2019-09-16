const loginFormData = {
  title: 'Login',
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
      inputType: 'button',
      value: 'Login',
    },
  ],
};

export { loginFormData };

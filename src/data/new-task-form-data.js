const newTaskFormData = {
  title: 'Add a new task',
  inputs: [
    {
      className: 'form__control form__control--text',
      type: 'text',
      name: 'name',
      id: 'name',
      required: true,
      inputType: 'input',
      placeholder: 'Task Name*',
    },
    {
      className: 'form__control form__control--number',
      type: 'number',
      name: 'priority',
      id: 'priority',
      required: true,
      inputType: 'input',
      min: 0,
      max: 9,
      placeholder: 'Priority*',
    },
    {
      className: 'form__control form__control--text',
      type: 'text',
      name: 'deadline',
      id: 'deadline',
      required: false,
      inputType: 'input',
      onFocus: (e) => {
        e.target.type = 'date';
      },
      onBlur: (e) => {
        e.target.type = 'text';
      },
      placeholder: 'Deadline',
    },
    {
      className: 'form__control form__control--textarea',
      type: 'text',
      name: 'body',
      id: 'body',
      required: true,
      inputType: 'textarea',
      placeholder: 'Task Description*',
    },
    {
      className: 'button button--wide',
      type: 'submit',
      name: 'submit',
      id: 'submit',
      required: true,
      inputType: 'button',
      value: 'Submit',
    },
  ],
};

export { newTaskFormData };

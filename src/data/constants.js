import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export const NEW_TASK_MUTATION = gql`
  mutation NewTaskMutation($name: String!, $body: String!, $priority: String!, $deadline: DateTime) {
    newTask(name: $name, body: $body, priority: $priority, deadline: $deadline) {
      name
      body
      priority
      deadline
    }
  }
`;

export const AUTH_TOKEN = 'token';

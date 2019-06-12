import { Kanban } from '../Kanban';
import React from 'react';
import { Route } from 'react-router-dom';

const Content = () => (
  <div className="container">
    <Route path="/" component={Kanban} />
  </div>
);

export { Content };

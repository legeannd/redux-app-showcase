import { createStore } from 'redux';

const store = createStore(() => {
  return {
    id: 3,
    name: 'Gean',
    email: 'gean.lfpsa@gmail.com'
  }
});

export default store;
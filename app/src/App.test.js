import { render, screen } from '@testing-library/react';
import App from './App';

test('teste', () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/Painel de Controle/i);
});

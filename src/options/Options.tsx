import * as React from 'react';
import { FC } from 'react';
import * as ReactDOM from 'react-dom/client';
import './options.scss'

const Options: FC = () => {
  return (
    <section className="options">
      <h1>Hello Options</h1>
      <p className="options__description">This is Google Extension Option Sample</p>
    </section>
  );
}

const rootElement = document.getElementById('root');
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Options />);

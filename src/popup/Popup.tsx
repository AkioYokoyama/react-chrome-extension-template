import * as React from 'react';
import { FC } from 'react';
import * as ReactDOM from 'react-dom/client';
import './popup.scss'

const Popup: FC = () => {
  return (
    <section className="popup">
      <h1>Google Chrome Extension Popup</h1>
      <p className="popup__description">This is Chrome Extension Popup Sample</p>
    </section>
  );
}

const rootElement = document.getElementById('root');
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Popup />);

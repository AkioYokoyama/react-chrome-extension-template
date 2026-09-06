import * as ReactDOM from 'react-dom/client';
import './index.css'
import H1 from './H1'

function Popup() {
  return (
    <section className="w-52">
      <H1 />
      <p className="text-red-500">This is Chrome Extension Popup Sample</p>
    </section>
  );
}

const rootElement = document.getElementById('root');
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Popup />);

import * as ReactDOM from 'react-dom/client';
import './index.css'

function Options() {
  return (
    <section className="w-52">
      <h1>Hello Options</h1>
      <p className="text-blur-500">This is Google Extension Option Sample</p>
    </section>
  );
}

const rootElement = document.getElementById('root');
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Options />);

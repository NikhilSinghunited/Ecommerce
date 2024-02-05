import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <p>Fronted</p>
      </Layout>
    </>
  );
}

export default App;

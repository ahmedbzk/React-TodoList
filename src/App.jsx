import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { Layout } from './components/layout';
import { HomePage } from './pages/homePage';


function App() {
  return (
    <div className='App'>

      <TodoWrapper />
      {/* <Layout>
        <HomePage/>
      </Layout> */}
    </div>
  );
}

export default App;

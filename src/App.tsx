import './App.scss';
import { DetailPage } from './Components/DetailPage/DetailPage';
import { PostsList } from './Components/PostsList/PostList';
import './normalize.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostsList />} />
          <Route path='/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

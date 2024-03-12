import './App.scss';
import { Container } from './Components/Container/Container';
import { DetailPage } from './Components/DetailPage/DetailPage';
import { PostsList } from './Components/PostsList/PostList';
import './normalize.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PostsList />} />
            <Route path='/:id' element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

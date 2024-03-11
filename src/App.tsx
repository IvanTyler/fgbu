import './App.scss';
import { PostsList } from './Components/PostsList/PostList';
import { Wrapper } from './Components/Wrapper/Wrapper';
import './normalize.css'

function App() {


  return (
    <div className="App">
      <Wrapper>
        <PostsList />
      </Wrapper>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './routes/category/Category';
import Main from './routes/Main';
import Mypage from './routes/mypage/MypageMain';
import Post from './components/Mypage/Post';
import Comment from './components/Mypage/Comment';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/mypage" element={<Mypage />}>
          <Route path="post" element={<Post />} />
          <Route path="comment" element={<Comment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

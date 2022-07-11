import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './routes/category/Category';
import Main from './routes/Main';
import Mypage from './routes/mypage/MypageMain';
import Post from './components/Mypage/Home/Post';
import Comment from './components/Mypage/Home/Comment';
import MypageSetting from './routes/mypage/MypageSetting';
import Review from './routes/review';
import ReviewPost from './routes/review/reviewPost';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/mypage/*" element={<Mypage />}>
          <Route path="post" element={<Post />} />
          <Route path="comment" element={<Comment />} />
        </Route>
        <Route path="/mypage/setting" element={<MypageSetting />} />

        <Route path="/review" element={<Review />} />
        <Route path="/review/post" element={<ReviewPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

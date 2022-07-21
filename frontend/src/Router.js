import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 메인 페이지
import Main from './routes/Main';

// 카테고리 페이지
import Category from './routes/Category';

// 마이페이지 1
import MypageMain from './routes/Mypage/1';
import Post from './routes/Mypage/Home/Post';
import Comment from './routes/Mypage/Home/Comment';

// 마이페이지 2
import MypageSetting from './routes/Mypage/2';

import Review from './routes/review';
import ReviewPost from './routes/review/reviewPost';

// 회원가입 페이지
import Register from './routes/Register/1';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/mypage/*" element={<MypageMain />}>
          <Route path="post" element={<Post />} />
          <Route path="comment" element={<Comment />} />
        </Route>

        <Route path="/mypage/setting" element={<MypageSetting />} />

        <Route path="/review" element={<Review />} />
        <Route path="/review/post" element={<ReviewPost />} />

        <Route path="/register/1" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

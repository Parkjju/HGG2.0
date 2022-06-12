import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './routes/category/Category';
import Main from './routes/Main';
import Mypage from './routes/mypage/MypageMain';
import Post from './components/Mypage/Home/Post';
import Comment from './components/Mypage/Home/Comment';
import MypageSetting from './routes/mypage/MypageSetting';
import SettingProfile from './components/Mypage/Setting/SettingProfile';

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
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

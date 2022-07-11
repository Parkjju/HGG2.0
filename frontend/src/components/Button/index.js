import { Btn } from './btn';

function PostButton({ url, description }) {
  return <Btn to={`${url}`}>{description}</Btn>;
}

export default PostButton;

import Logo from '../../../../assets/logo.svg';
import { FormHeaderBox } from './form';

function FormHeader() {
  return (
    <FormHeaderBox>
      <img src={Logo} alt="logo" />
    </FormHeaderBox>
  );
}

export default FormHeader;

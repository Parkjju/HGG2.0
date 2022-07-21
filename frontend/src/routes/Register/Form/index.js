import { FormBox, InputForm } from './form';

function Form({ placeholder }) {
  return (
    <FormBox>
      <InputForm placeholder={placeholder} />
    </FormBox>
  );
}

export default Form;

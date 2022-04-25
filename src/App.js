import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './style.css';
import {
  Input,
  Button,
  Label,
  FormContainer,
  FormHeaderContainer,
  ControlsContainer,
  FieldContainer,
  ErrorMessageContainer,
  ButtonFloatContainer,
} from './style';

const App = () => {
  const schema = yup.object({
    name: yup.string().required('O campo nome é obrigatório.'),
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('O campo email é obrigatório.'),
    age: yup
      .number()
      .required('O campo idade é obrigatório.')
      .typeError('O campo deve ser um número')
      .positive('O campo deve ser positivo.')
      .integer('O campo deve ser um número inteiro.'),
  });

  const [data, setData] = useState({});

  const {
    handleSubmit,
    register,
    reset,
    getFieldState,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
  };

  const handleReset = () => {
    reset();
    setData({});
    setTimeout(() => setFocus('name'), 1);
  };

  const ErrorMessage = ({ name }) => (
    <ErrorMessageContainer>
      <div>{errors && errors[name]?.message}</div>
    </ErrorMessageContainer>
  );

  const FormHeader = ({ children }) => (
    <FormHeaderContainer>{children}</FormHeaderContainer>
  );

  const ResultSubmit = ({ data }) =>
    Object.keys(data).length > 0 && <pre>{JSON.stringify(data, null, 1)}</pre>;

  return (
    <FormContainer>
      <FormHeader>CADASTRO</FormHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <Label>NOME</Label>
          <Input
            name="name"
            className="name"
            defaultValue=""
            {...register('name')}
            isError={getFieldState('name').invalid}
          />
          <ErrorMessage name="name" />
        </FieldContainer>

        <FieldContainer>
          <Label>IDADE</Label>
          <Input
            name="age"
            className="age"
            {...register('age')}
            isError={getFieldState('age').invalid}
          />
          <ErrorMessage name="age" />
        </FieldContainer>

        <FieldContainer>
          <Label>E-MAIL</Label>
          <Input
            name="email"
            className="email"
            {...register('email')}
            isError={getFieldState('email').invalid}
          />
          <ErrorMessage name="email" />
        </FieldContainer>

        <ButtonFloatContainer>
          <Button
            className="clean-button secondary"
            type="button"
            onClick={handleReset}
          >
            LIMPAR CAMPOS
          </Button>
        </ButtonFloatContainer>

        <ControlsContainer>
          <Button className="primary" type="submit">
            CADASTRAR
          </Button>
        </ControlsContainer>

        <ResultSubmit data={data} />
      </form>
    </FormContainer>
  );
};

export default App;

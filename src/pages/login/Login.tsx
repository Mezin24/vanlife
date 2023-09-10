import { useState, FormEvent, ChangeEvent } from 'react';
import {
  ActionFunctionArgs,
  LoaderFunction,
  ParamParseKey,
  Params,
  useLoaderData,
} from 'react-router-dom';

const Paths = {
  login: '/login',
} as const;

interface LoginArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.login>>;
}

export const loader: LoaderFunction = async ({ request }: LoginArgs) => {
  const message = new URL(request.url).searchParams.get('message');
  return message;
};

export function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const message = useLoaderData() as string;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {message && <h2 className='red'>{message}</h2>}
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='Email address'
          value={loginFormData.email}
        />
        <input
          name='password'
          onChange={handleChange}
          type='password'
          placeholder='Password'
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

import { Creds, loginUser } from 'api/services/loginUser';
import { useState, FormEvent, CSSProperties } from 'react';
import {
  LoaderFunction,
  ParamParseKey,
  Params,
  useLoaderData,
  useNavigate,
  Form,
  redirect,
} from 'react-router-dom';
import { Local_Storage_auth_key } from 'utils/localStorage/localStorage';

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

interface DataFunctionArgs {
  request: Request;
  params: Params;
}

export interface ActionFunctionArgs extends DataFunctionArgs {}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const submission: Creds = {
    email,
    password,
  };
  const data = await loginUser(submission);
  if (data.token) {
    localStorage.setItem(Local_Storage_auth_key, JSON.stringify(true));
    return redirect('/host');
  }
  return null;
};

enum LOGIN_STATUS {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  ERROR = 'error',
}

export function Login() {
  const message = useLoaderData() as string;
  const [status, setStatus] = useState<LOGIN_STATUS>(LOGIN_STATUS.IDLE);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   try {
  //     setStatus(LOGIN_STATUS.SUBMITTING);
  //     setError(null);
  //     const res = await loginUser(loginFormData);
  //     setStatus(LOGIN_STATUS.IDLE);
  //     navigate('/host', { replace: true });
  //     console.log(res);
  //   } catch (error: any) {
  //     setError(error?.message ?? 'Custom Error');
  //   }
  // }

  const isBtnDIsabled = status === LOGIN_STATUS.SUBMITTING;

  const btnStyles: CSSProperties = {
    cursor: isBtnDIsabled ? 'none-allowed' : 'pointer',
    filter: isBtnDIsabled ? 'grayscale(1)' : 'grayscale(0)',
  };

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {message && <h3 className='red'>{message}</h3>}
      {error && <h3>{error}</h3>}
      <Form replace method='post' className='login-form'>
        <input name='email' type='email' placeholder='Email address' />
        <input name='password' type='password' placeholder='Password' />
        <button style={btnStyles} disabled={isBtnDIsabled}>
          {isBtnDIsabled ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  );
}

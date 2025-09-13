import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

export default function Login() {
	return (
		<main className="w-full relative flex flex-col">
			<div className="absolute inset-0 -z-10">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
					alt="netflix bg"
				/>
			</div>
			<header className="w-full px-20 bg-gradient-to-b from-black">
				<img
					src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="netflix logo"
					width={150}
					height={50}
				/>
			</header>
			<div className="h-[80vh] flex justify-center items-center">
				<LoginForm />
			</div>
			<footer className="w-full h-60 bg-neutral-900 text-white py-14 px-20">
				<ul className="flex gap-14 items-center flex-wrap">
					<li className="underline cursor-pointer">Need help?</li>
					<li className="underline cursor-pointer">Reach out </li>
					<li className="underline cursor-pointer">Contact us</li>
					<li className="underline cursor-pointer">Twitter</li>
				</ul>
			</footer>
		</main>
	);
}

function LoginForm() {
	const [isSignUpForm, setIsSignUpForm] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	function toggleSignUpForm() {
		setIsSignUpForm((prev) => !prev);
	}

	function validateSignInForm(name: string, email: string, password: string) {
		const isValidEmail =
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
		const isValidPassword =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
				password,
			);

		const isValidName = name.trim().length >= 1;

		const error: { email?: string; password?: string; name?: string } = {};

		if (!isValidEmail) {
			error.email = 'Enter valid email';
		}

		if (!isValidPassword) {
			error.password = 'Enter valid password';
		}

		if (!isValidName) {
			error.name = 'Enter valid name';
		}

		return error;
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		const name = nameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		const res = validateSignInForm(name, email, password);
		if (res.name) {
			setErrorMessage(res.name);
		} else if (res.email) {
			setErrorMessage(res.email);
		} else if (res.password) {
			setErrorMessage(res.password);
		} else {
			setErrorMessage('');
		}
	}
	return (
		<form
			className=" max-w-md w-full h-fit min-h-[50vh] bg-neutral-900/90 text-neutral-50 rounded-sm p-20 space-y-8"
			onSubmit={handleSubmit}>
			<h1 className="text-3xl font-semibold">
				{isSignUpForm ? 'Sign Up' : 'Sign In'}
			</h1>
			{isSignUpForm ? (
				<Input
					ref={nameRef}
					type="name"
					id="name"
					name="text"
					placeholder="Enter your name"
					className="h-14 px-6 md:text-base"
				/>
			) : null}
			<Input
				ref={emailRef}
				type="email"
				id="email"
				name="email"
				placeholder="Enter your email"
				className="h-14 px-6 md:text-base"
			/>
			<Input
				ref={passwordRef}
				type="password"
				id="current-password"
				name="current-password"
				placeholder="Enter your password"
				className="h-14 px-6 md:text-base"
			/>

			<div className="flex flex-col">
				<p
					className={cn(
						'text-red-500 mb-4 opacity-0',
						errorMessage && 'opacity-100',
					)}>
					{errorMessage}
				</p>

				<Button
					type="submit"
					className="rounded-md w-full bg-red-700 hover:bg-red-800 h-12">
					{isSignUpForm ? 'Sign Up' : 'Sign In'}
				</Button>
			</div>

			<p>
				{isSignUpForm ? 'Already have an account?' : 'New to Netflix?'}
				<button
					type="button"
					className="ml-2 hover:underline cursor-pointer"
					onClick={toggleSignUpForm}>
					{isSignUpForm ? 'Sign in' : 'Sign up now.'}
				</button>
			</p>
		</form>
	);
}

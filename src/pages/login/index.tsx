import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { NETFLIX_AVATAR, NETFLIX_BG, NETFLIX_LOGO } from "@/utils/constants";
import { loginUser, signUpUser, updateUser as updateUserFirebase } from "@/utils/firebase/userActions";
import { updateUser } from "@/utils/store/slices/userSlice";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

interface ValidationErrors {
  name?: string;
  email?: string;
  password?: string;
}

interface FormData {
  name?: string;
  email: string;
  password: string;
}

export default function Login() {
  return (
    <main className={`w-full relative flex flex-col bg-[url(${NETFLIX_BG})] bg-cover`}>
      <header className="w-full px-20 bg-gradient-to-b from-black">
        <img src={NETFLIX_LOGO} alt="netflix logo" width={150} height={50} />
      </header>
      <div className="min-h-[70vh] h-full max-h-[80vh] flex justify-center items-center">
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
  const dispatch = useDispatch();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function toggleSignUpForm() {
    setIsSignUpForm((prev) => !prev);
    setErrorMessage("");
  }

  function validateForm(formData: FormData, isSignUp: boolean): ValidationErrors {
    const errors: ValidationErrors = {};

    if (isSignUp) {
      if (!formData.name || formData.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters long";
      }
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password = "Password must be at least 8 characters with letters, numbers, and special characters";
    }

    return errors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData: FormData = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    const errors = validateForm(formData, isSignUpForm);

    const firstError = Object.values(errors)[0];
    if (firstError) {
      setErrorMessage(firstError);
      return;
    }

    setErrorMessage("");

    if (isSignUpForm) {
      const res = await signUpUser({
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        setErrorMessage(res.errorContent.message);
      }

      updateUserFirebase({
        name: formData.name ?? "",
        photoURL: NETFLIX_AVATAR,
      })
        .then(() => {
          dispatch(
            updateUser({
              name: formData.name,
              photoURL: NETFLIX_AVATAR,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });

      // console.log(updateRes);
    } else {
      const loginRes = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (loginRes?.error) {
        setErrorMessage(loginRes.errorContent.message);
      }
    }
  }

  return (
    <form
      className=" max-w-md w-full h-fit min-h-[50vh] bg-neutral-900/90 text-neutral-50 rounded-sm p-20 space-y-8"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-semibold">{isSignUpForm ? "Sign Up" : "Sign In"}</h1>
      {isSignUpForm ? (
        <Input
          ref={nameRef}
          type="name"
          required
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
        <p className={cn("text-red-500 mb-4 opacity-0", errorMessage && "opacity-100")}>{errorMessage}</p>

        <Button type="submit" className="rounded-md w-full bg-red-700 hover:bg-red-800 h-12">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </Button>
      </div>

      <p>
        {isSignUpForm ? "Already have an account?" : "New to Netflix?"}
        <button type="button" className="ml-2 hover:underline cursor-pointer" onClick={toggleSignUpForm}>
          {isSignUpForm ? "Sign in" : "Sign up now."}
        </button>
      </p>
    </form>
  );
}

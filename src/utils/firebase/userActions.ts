import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { auth } from './config';
import { catchErrorMessage } from '@/lib/utils';

export const getCurrentUser = async () => {
	console.log(auth.currentUser);
	return auth.currentUser;

	const res = onAuthStateChanged(auth, (user) => {
		console.log(user);
	});
	return res;
};

export const signUpUser = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);

		return res;
	} catch (error) {
		return catchErrorMessage(error);
	}
};

export const loginUser = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		return res;
	} catch (error) {
		return catchErrorMessage(error);
	}
};

export const updateUser = async ({ name }: { name: string }) => {
	const user = await getCurrentUser();
	if (user) {
		const res = await updateProfile(user, { displayName: name });

		return res;
	} else {
		throw new Error('User not found');
	}
};

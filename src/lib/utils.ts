import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function jsonStringify(json: unknown) {
	return JSON.stringify(json, null, 2);
}

export function catchErrorMessage(error: unknown) {
	console.log(error);
	return { error: true, errorContent: error };
}

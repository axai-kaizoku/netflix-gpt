import { catchErrorMessage } from "@/lib/utils"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
import type { UserState } from "../store/slices/userSlice"
import { auth } from "./config"

export const signUpUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)

    return res
  } catch (error) {
    return catchErrorMessage(error)
  }
}

export const loginUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    return res
  } catch (error) {
    return catchErrorMessage(error)
  }
}

export const updateUser = async ({
  name,
  photoURL,
}: {
  name: string
  photoURL?: string
}) => {
  try {
    const res = await updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL: photoURL,
    })

    return res
  } catch (error) {
    return catchErrorMessage(error)
  }
}

export const signOutUser = () => {
  const res = signOut(auth)
  return res
}

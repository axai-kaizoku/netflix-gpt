import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

const names = [
  {
    name: "Monkey D. Luffy",
    message: "Kaizoku Ou ni ore wa naru!",
  },
  {
    name: "Roronoa Zoro",
    message: "Nothing happened!",
  },
  {
    name: "Nami",
    message: "Money, money, money!",
  },
  {
    name: "Usopp",
    message: "I am Captain Usopp, the bravest warrior of the sea!",
  },
  {
    name: "Sanji",
    message: "I'm a cook, and I'm a man who loves women.",
  },
  {
    name: "Tony Tony Chopper",
    message: "I'm a doctor, and I can cure anything!",
  },
  {
    name: "Nico Robin",
    message: "I want to live!",
  },
  {
    name: "Franky",
    message: "SUPER!",
  },
  {
    name: "Brook",
    message: "Yohohoho! May I see your panties?",
  },
  {
    name: "Jinbe",
    message: "Luffy-san, I am your subordinate!",
  },
  {
    name: "Shanks",
    message: "If you pick a fight, pick it with me!",
  },
  {
    name: "Portgas D. Ace",
    message: "I don't regret anything!",
  },
  {
    name: "Trafalgar D. Water Law",
    message: "Room... Shambles!",
  },
  {
    name: "Smoker",
    message: "I'll do what I have to do.",
  },
  {
    name: "Buggy",
    message: "I am Buggy D. Clown, the future Pirate King!",
  },
  {
    name: "Boa Hancock",
    message: "Yes, I am beautiful!",
  },
  {
    name: "Dracule Mihawk",
    message: "To know the world, you must be a pirate.",
  },
  {
    name: "Gol D. Roger",
    message: "My treasure? If you want it, you can have it!",
  },
  {
    name: "Charlotte Katakuri",
    message: "I will not let a single enemy escape.",
  },
  {
    name: "Yamato",
    message: "I am Kozuki Oden!",
  },
];

export function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

export const fibonacci = (n = 0): number => {
  if (n === 0) {
    return 0;
  }
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

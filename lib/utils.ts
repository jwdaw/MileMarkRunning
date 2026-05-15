import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const basePath =
  process.env.NODE_ENV === "production" ? "/MileMarkRunning" : "";

export function getImagePath(path: string) {
  return `${basePath}${path}`;
}

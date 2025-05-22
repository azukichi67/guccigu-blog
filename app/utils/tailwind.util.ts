import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const sm = (...inputs: string[]) => {
  return twMerge(clsx(inputs.map((x) => `sm:${x}`)));
};

export const md = (...inputs: string[]) => {
  return twMerge(clsx(inputs.map((x) => `md:${x}`)));
};

import { Hero } from "./Hero"
import { Test } from "./Test";

export const resolveComponent = (type: string): ((props: any) => JSX.Element) | null => {
  if (type === 'hero') {
    return Hero;
  }

  if (type === 'test') {
    return Test;
  }

  return null;
}
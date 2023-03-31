export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word: string) => word.charAt(0))
    .join("");
};

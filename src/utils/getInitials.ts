export const getInitials = (name: string): string => {
  return (
    name &&
    name
      .split(" ")
      .slice(0, 4)
      .map((word: string) => word.charAt(0))
      .join("")
  );
};

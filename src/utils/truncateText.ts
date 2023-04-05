export const truncateText = (text: string) => {
  if (text.length <= 400) {
    return text;
  }

  // Find the index of the first period after 400 characters
  const periodIndex = text.indexOf(".", 400);

  // If a period was found, truncate the text at that index
  if (periodIndex !== -1) {
    return text.slice(0, periodIndex + 1);
  }

  // If no period was found, simply truncate the text at 400 characters
  return text.slice(0, 400);
};

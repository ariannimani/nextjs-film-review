import { RefObject, useEffect, useRef } from "react";

interface Props {
  onClickOutside?: () => void;
}

const useClickOutside = ({ onClickOutside }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, onClickOutside]);
  return ref;
};

export default useClickOutside;

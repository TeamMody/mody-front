import { useEffect, RefObject } from 'react';

const useOutsideClick = (
  dialogRef: RefObject<HTMLElement>,
  rootRef: RefObject<HTMLElement>,
  inputRef: RefObject<HTMLElement>,
  callback: () => void,
  isEnabled: boolean = false, // 기본값 설정
) => {
  const handleOutsideClick = (e: MouseEvent) => {
    const path = e.composedPath(); // 클릭된 요소의 경로 배열
    if (
      dialogRef.current &&
      inputRef.current &&
      !path.includes(dialogRef.current) &&
      !path.includes(inputRef.current)
      // 모달 내부가 아닌 경우
    ) {
      callback(); // 모달 닫기
    }
  };

  useEffect(() => {
    if (isEnabled && rootRef) {
      rootRef.current?.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      rootRef.current?.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isEnabled]);
};

export default useOutsideClick;

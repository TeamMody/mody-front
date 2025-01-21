import styled from 'styled-components';
import { years, months, getDays } from '@onboarding/utils/getData';
import React, { useRef, useState, useLayoutEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { UserInfoSchemaType } from '@onboarding/schema';
import Option from './BirthdayOption';

const Dialog = React.memo(
  ({
    open,
    dialogRef,
    selectedDate,
    setValue,
  }: {
    open: boolean;
    dialogRef: React.RefObject<HTMLDialogElement>;
    selectedDate: { year: number; month: number; day: number };
    setValue: UseFormSetValue<UserInfoSchemaType>;
  }) => {
    const centerRef = useRef<HTMLDivElement>(null);
    const [dayArr, setDayArr] = useState<number[]>(() => getDays(selectedDate.month));
    const dateRefs = useRef<(HTMLDivElement | null)[][]>(Array.from({ length: 3 }, () => []));

    console.log(selectedDate);
    const { year: selectedYear, month: selectedMonth, day: selectedDay } = selectedDate;
    useLayoutEffect(() => {
      setDayArr(getDays(selectedMonth));
    }, [selectedMonth]);

    return (
      <Dialog1 open={open} ref={dialogRef}>
        <CenterHighlight ref={centerRef} />
        <Option
          isModalOpen={open}
          data={years}
          selected={selectedYear}
          centerRef={centerRef}
          dateRefs={dateRefs.current[0]}
          setValue={setValue}
          type={'year'}
        />
        <Option
          isModalOpen={open}
          data={months}
          selected={selectedMonth}
          centerRef={centerRef}
          dateRefs={dateRefs.current[1]}
          setValue={setValue}
          type={'month'}
        />
        <Option
          isModalOpen={open}
          data={dayArr}
          selected={selectedDay}
          centerRef={centerRef}
          dateRefs={dateRefs.current[2]}
          setValue={setValue}
          type={'day'}
        />
      </Dialog1>
    );
  },
  (prevProps, nextProps) => {
    // props 변경 사항 비교
    return (
      prevProps.open === nextProps.open &&
      JSON.stringify(prevProps.selectedDate) === JSON.stringify(nextProps.selectedDate)
    );
  },
);

const Dialog1 = styled.dialog<{ open: boolean }>`
  height: 30vh;
  display: ${({ open }) => (open ? 'flex' : 'none')}; /* open 속성 기반 제어 */
  position: relative;
  border-radius: 0px 0px 10px 10px;
  background-color: ${({ theme }) => theme.colors.gray600};
  border: none;
  border-top: ${({ theme }) => `1px solid ${theme.colors.gray500}`};
`;

const CenterHighlight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 34px;
  transform: translate(-50%, -50%); /* 요소를 정확히 가운데로 이동 */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.green500};
  pointer-events: none; /* 클릭 불가 */
  z-index: 1;
`;

export default Dialog;

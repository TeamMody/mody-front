import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { currentYear, generateDayOptions, generateMonthOptions, generateYearOptions } from '@onboarding/utils/date.ts';
import { scrollToCenter } from '@onboarding/utils/scroll.ts';

const BirthdaySelector = () => {
  const [selectedYear, setSelectedYear] = useState<number>(1996);
  const [selectedMonth, setSelectedMonth] = useState<number>(4);
  const [selectedDay, setSelectedDay] = useState<number>(11);

  const years = generateYearOptions(currentYear - 100, currentYear);
  const months = generateMonthOptions();
  const days = generateDayOptions(selectedYear, selectedMonth);

  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    scrollToCenter(yearRefs, years.indexOf(selectedYear));
  }, [selectedYear, years]);

  useEffect(() => {
    scrollToCenter(monthRefs, months.indexOf(selectedMonth));
  }, [selectedMonth, months]);

  useEffect(() => {
    scrollToCenter(dayRefs, days.indexOf(selectedDay));
  }, [selectedDay, days]);

  return (
    <Container>
      <SelectedDate>
        {selectedYear}년 {selectedMonth}월 {selectedDay}일
      </SelectedDate>
      <Divider />
      <DropdownContainer>
        <Dropdown>
          {years.map((year, index) => (
            <Option
              key={year}
              isSelected={year === selectedYear}
              onClick={() => setSelectedYear(year)}
              ref={(el) => (yearRefs.current[index] = el)} // Ref 배열에 엘리먼트 저장
            >
              {year}
            </Option>
          ))}
        </Dropdown>
        <Dropdown>
          {months.map((month, index) => (
            <Option
              key={month}
              isSelected={month === selectedMonth}
              onClick={() => setSelectedMonth(month)}
              ref={(el) => (monthRefs.current[index] = el)} // Ref 배열에 엘리먼트 저장
            >
              {month}
            </Option>
          ))}
        </Dropdown>
        <Dropdown>
          {days.map((day, index) => (
            <Option
              key={day}
              isSelected={day === selectedDay}
              onClick={() => setSelectedDay(day)}
              ref={(el) => (dayRefs.current[index] = el)} // Ref 배열에 엘리먼트 저장
            >
              {day}
            </Option>
          ))}
        </Dropdown>
      </DropdownContainer>
    </Container>
  );
};

export default BirthdaySelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #66666680;
  color: white;
  padding: 6px 18px 19.5px 18px ;
  border-radius: 10px;
`;

const SelectedDate = styled.div`
  font: ${({ theme }) => theme.fonts.heading_medium_20px};
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 230px;
  overflow-y: auto;
  border-radius: 8px;
  padding: 40% 8px 40% 8px;
  scroll-snap-type: y mandatory;
`;

const Option = styled.div<{ isSelected: boolean }>`
  font: ${({ theme }) => theme.fonts.heading_medium_20px};
  text-align: center;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.green500 : 'transparent')};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.green800 : '#fff')};
  border-radius: 4px;
`;

const Divider = styled.div`
  margin-top: 6px;
  margin-bottom: 18px;
  width: 100%;
  height: 1px;
  background-color: #808080;
`;

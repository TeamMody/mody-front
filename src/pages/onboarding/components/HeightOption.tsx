import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { UserInfoSchemaType } from 'pages/onboarding/feature/schema';

// onScroll 시 값이 변하게
const Option = React.memo(
  ({
    isModalOpen,
    data,
    selected,
    centerRef,
    dateRefs,
    setValue,
  }: {
    isModalOpen: boolean;
    data: number[];
    selected: number;
    centerRef: React.RefObject<HTMLDivElement>;
    dateRefs: (HTMLDivElement | null)[];
    setValue: UseFormSetValue<UserInfoSchemaType>;
  }) => {
    const optionRef = useRef<HTMLDivElement>(null);

    // 스크롤이 가장 가까운 항목 찾기
    const findClosestElement = (): {
      index: number;
      el: HTMLDivElement;
    } | null => {
      const center = centerRef.current?.getBoundingClientRect();
      if (!center) return null;

      let closest = null;
      let closestDistance = Infinity;
      dateRefs.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.y - center.y);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = { index, el };
        }
      });

      return closest;
    };

    const handleScroll = () => {
      const closest = findClosestElement();

      if (closest) {
        // type에 따라 값 업데이트
        setValue('height', data[closest.index], {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    };

    const handleClick = (index: number) => {
      const selectedEl = dateRefs[index];
      if (selectedEl) {
        selectedEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });

        // 값 업데이트
        setValue('height', data[index], {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    };

    useEffect(() => {
      const currentOption = optionRef.current;
      if (currentOption) {
        currentOption.addEventListener('scroll', handleScroll);
      }

      return () => {
        if (currentOption) {
          currentOption.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);

    useEffect(() => {
      const selectedEl = dateRefs[data.indexOf(selected)];
      if (selectedEl && isModalOpen) {
        selectedEl.scrollIntoView({
          behavior: 'instant',
          block: 'center',
        });
      }
    }, [isModalOpen]);

    return (
      <OptionContainer ref={optionRef}>
        {data.map((d, index) => (
          <Select
            key={d}
            ref={(el) => (dateRefs[index] = el)}
            className={selected === d ? 'selected' : ''}
            onClick={() => handleClick(index)}
          >
            {d}
          </Select>
        ))}
      </OptionContainer>
    );
  },
);

const OptionContainer = styled.div`
  width: 33.33333%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  padding: 30% 0 30% 0;
  z-index: 2;
`;

const Select = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  font-size:${({ theme }) => theme.fonts.heading_medium_20px}
  color: white;

  &.selected{
    color:black;
    font-weight: bold;
  }
`;

export default Option;

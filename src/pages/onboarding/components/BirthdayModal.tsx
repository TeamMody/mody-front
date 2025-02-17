import styled from 'styled-components';
import { useState, useRef } from 'react';
import { UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { UserInfoSchemaType } from 'pages/onboarding/feature/schema';
import BirthdayDialog from '@pages/onboarding/components/BirthdayDialog';
import usePositionedDialog from '@onboarding/feature/hooks/usePositionedDialog';
import useOutsideClick from '@onboarding/feature/hooks/useOutsideClick';

const BirthdayModal = ({
  watch,
  rootRef,
  setValue,
}: {
  watch: UseFormWatch<UserInfoSchemaType>;
  rootRef: React.RefObject<HTMLDivElement>;
  setValue: UseFormSetValue<UserInfoSchemaType>;
}) => {
  const birthday = watch('birthday');
  const { year, month, day } = birthday;

  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  usePositionedDialog({ inputRef, dialogRef, isModalOpen });
  useOutsideClick(dialogRef, rootRef, inputRef, () => setIsModalOpen(false), isModalOpen);

  return (
    <Container>
      <span className="title">생년월일 8자리</span>
      <div className="input-box">
        <StyledInput
          type="text"
          placeholder={`${year}년 ${month}월 ${day}일`}
          readOnly
          ref={inputRef}
          onClick={() => setIsModalOpen((prev) => !prev)}
          open={isModalOpen}
        />
        <BirthdayDialog
          open={isModalOpen}
          dialogRef={dialogRef}
          selectedDate={birthday}
          setValue={setValue}
        ></BirthdayDialog>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title {
    font-size: ${({ theme }) => theme.fonts.body_medium_16px};
    color: white;
  }

  .input-box {
    width: 100%;
    margin-top: 1vh;
    display: flex;
    flex-direction:column;
`;

const StyledInput = styled.input<{ open: boolean }>`
  border-radius: ${({ open }) => (open ? '10px 10px 0px 0px' : '10px')};
  outline: none;
  border: none;
  width: 100%;
  height: 5vh;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
  border-bottom: ${({ theme }) => theme.colors.gray500};

  &::placeholder {
    font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
    color: white;
    line-height: 5vh;
  }
`;
export default BirthdayModal;

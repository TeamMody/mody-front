import styled from 'styled-components';
const ThirdPage = () => {
  return (
    <>
      <Text>
        이제 모디와 함께 <br /> 당신의 모드를 시작해봐요!
      </Text>
      <Image src="" alt="" />
    </>
  );
};

const Text = styled.span`
  margin-top: 5vh;
  color: #ffffff;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
`;

const Image = styled.img`
  width: 20vh;
  height: 20vh;
  border-radius: 100%;
  background-color: #3b3b3b;
  margin-top: 5vh;
`;
export default ThirdPage;

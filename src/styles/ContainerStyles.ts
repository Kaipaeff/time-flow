import { styled } from 'styled-components';

export const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 570px;
  height: 720px;
  padding: 20px 80px 40px;
  border-radius: 45px;
  background-color: #fff;
  // box-shadow: 0px 16px 24px 6px rgba(2, 9, 51, 0.439); //для темной темы
  box-shadow: 0px 18px 32px 2px rgba(2, 9, 51, 0.25); //для светлой темы
`;

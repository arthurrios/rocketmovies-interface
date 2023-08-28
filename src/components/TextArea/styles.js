import { styled } from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 17.125rem;
  background-color: ${({ theme }) => theme.colors.gray_800};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 1rem 1.5rem;

  border: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_200};
    font-size: 0.875rem;
  }
`

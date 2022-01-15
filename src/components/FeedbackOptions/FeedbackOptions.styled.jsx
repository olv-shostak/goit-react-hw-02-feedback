import styled from "@emotion/styled";

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const FeedbackItem = styled.li`
  color: #010101;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const FeedbackBtn = styled.button`
  border: solid 1px transparent;
  border-radius: 8px;
  cursor: pointer;
  font-size: 25px;
  padding: 5px 10px;
  background-color: #15c415;
  &:focus,
  &:hover {
    color: white;
    background-color: #00a300;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
  &[name="neutral"] {
    background-color: #d7f162;
    &:focus,
    &:hover {
      color: white;
      background-color: #f5f100;
    }
  }
  &[name="bad"] {
    background-color: #ff5353;
    &:focus,
    &:hover {
      color: white;
      background-color: #ee0000;
    }
  }
`;

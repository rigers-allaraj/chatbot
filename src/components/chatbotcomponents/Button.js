import styled from 'styled-components';

const Button = styled.button`
  background-color: #003399;
  color: #e7edee;
  height: 1.8rem;
  width: 4.5rem;
  border-color: transparent;
  font-size: 13px;
  margin-top: 3px;
  margin-right: 3px !important;
  border-radius: inherit;
  border-width: inherit;
  margin-right: inherit;
  float: right;
  :disabled {
    background: #d3d3d3;
    cursor: not-allowed;
  }
  :hover:enabled {
    color: #fff;
  }
`;

export default Button;

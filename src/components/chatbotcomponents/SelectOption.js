import styled from 'styled-components';

const SelectOption = styled.select`
  color:#003399;
  min-height: 2rem;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  border: 1px groove #003399;
  border-right: 0; 
  border 0;    //hidde select border when the select size is similar with parent element
  outline: none;
  width: 50%;
  background: white;
  option{
    background: white;
  }
`;

export default SelectOption;

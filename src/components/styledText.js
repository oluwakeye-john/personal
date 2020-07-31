import styled from "styled-components"

const StyledText = styled.span`
  /* color: #6e3a6c; */
  /* color: ${({ theme }) => theme.link}; */
  text-decoration: none;
  /* background: -webkit-linear-gradient(180deg, #ff8a00, #e52e71); */

  background: -webkit-linear-gradient(0deg, #e48a28, #cc4856, #6e3a6c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default StyledText

// background: -webkit-gradient(
//   linear,
//   left top,
//   right top,
//   from(#e48a28),
//   color-stop(50%, #cc4856),
//   to(#6e3a6c)
// );

import styled from "styled-components"

const StyledText = styled.span`
  color: #6e3a6c;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#e48a28),
    color-stop(50%, #cc4856),
    to(#6e3a6c)
  );
  background: linear-gradient(to right, #e48a28 0%, #cc4856 50%, #6e3a6c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default StyledText

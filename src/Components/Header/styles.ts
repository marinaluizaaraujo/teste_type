import styled from "styled-components"

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props) =>props.theme['gray2_cards']};
height: 6.25rem;
gap: 0.5rem;

img{
height: 3.75rem;
width: 3.75rem;
}
`
export const TextCustom = styled.span`
font-weight: bold;
font-size: 1.5rem;
`
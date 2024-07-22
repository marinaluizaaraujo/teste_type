import { HeaderContainer, TextCustom } from "./styles"
import Logo from "./../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
    <img 
    src={Logo} 
    alt="logotipo dois triangulos em rotação de 15 graus a direita da cor verde"
    />
    <TextCustom> Ignite Feed </TextCustom>
        </HeaderContainer>
    )
}

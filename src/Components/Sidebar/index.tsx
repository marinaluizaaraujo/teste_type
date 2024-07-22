import { PencilLine } from "phosphor-react";
import { AsideContainer, ButtonSidebar, Cover, FooterContainer, Profile } from "./styles";
import { Avatar } from "../Avatar";

export function Sidebar() {
    return (
        <AsideContainer>
            <Cover
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="uma xicara de cafe e um teclado"
            />
            <Profile>
                <Avatar imageUrl={'https://github.com/marinaluizaaraujo.png'}/>
                <strong>Marina Paiva</strong>
                <span>Web Students</span>
            </Profile>
            <FooterContainer>
                <ButtonSidebar>
                    <PencilLine size={20} />
                    Editar seu perfil
                </ButtonSidebar>
            </FooterContainer>
        </AsideContainer>
    )
}

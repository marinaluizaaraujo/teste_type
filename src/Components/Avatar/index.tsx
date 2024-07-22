import { AvatarProps } from "./props"
import { AvatarContainer } from "./styles"

// interface AvatarProps{
//     hasBorder?:boolean
// }

export function Avatar({imageUrl}:AvatarProps) {
    return (
<AvatarContainer
src={imageUrl}
// alt="imagem referente a Marina Luiza Araujo Paiva de perfil" 
/>
    )
}

import { format } from "date-fns"
import { Avatar } from "../Avatar"
import { PostProps } from "./props"
import { AvatarInfo, ButtonFooter, ContainerFooter, ContainerMain, InfoContainer, PostContainer, Separador, TextareaCuston, } from "./styles"
import { ptBR } from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"


export function Post({ post }: PostProps) {
    const { author, content, publishedAt } = post
    const { name, role } = author
    const publishedAtFormatted=format(publishedAt,"d 'de' LLLL 'às'HH:mm 'h'",{
        locale:ptBR,
    },
    )
    const publishedAtRelativetoNow = formatDistanceToNow(publishedAt,
        {locale:ptBR,
        addSuffix: true,
    })
    return (
        <PostContainer>
            <InfoContainer>
                <AvatarInfo>
                    <Avatar imageUrl={author.avatarUrl}/>
                    <div>
                        <h1>{name}</h1>
                        <p>{role}</p>
                    </div>
                </AvatarInfo>
                <time title={publishedAtFormatted} dateTime=
                {publishedAt.toISOString()}>
                    {publishedAtRelativetoNow}
                </time>
            </InfoContainer>
            <ContainerMain>
                <p>{content.map((line,index)=>(<p key={index}>{line.content}</p>))}</p>
            </ContainerMain>
            <Separador></Separador>
            <ContainerFooter>
                <p>Deixe seu feedback</p>
                <TextareaCuston
                    name=""
                    id=""
                    placeholder="Nossa, adorei amigo! Parabé|"></TextareaCuston>
                <ButtonFooter>Publicar</ButtonFooter>
            </ContainerFooter>
        </PostContainer>
    )
}

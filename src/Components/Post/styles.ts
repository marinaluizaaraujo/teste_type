import styled from "styled-components"

export const PostContainer = styled.article`
    background-color: ${(props) => props.theme['gray2_cards']};
    /* height: 38.813rem; */
    width: 52rem;   
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 8px;
`

export const InfoContainer = styled.header`
    display: flex;
    justify-content: space-between;

    time{
        color: ${(props) => props.theme['gray5_text-apoio']};
        font-size: 0.875rem;
    }
`

export const AvatarInfo = styled.div`
    display: flex;
    
    div{
    margin-left: 1rem;

    h1{
        font-weight: bold;
        color: ${(props) => props.theme['white']};
    }

    p{
        color: ${(props) => props.theme['gray5_text-apoio']};
        font-size: 0.875rem;
    }
    }
`

export const ContainerMain = styled.main`
margin-top: 1.5rem;

    a{
        color: ${(props) => props.theme['green-Light']};
        text-decoration: none;
    }
`

export const Separador = styled.div`
    border-top: 1px solid ${(props) => props.theme['gray3_divider']};
    margin-top: 1.5rem;
    margin-bottom:1.5rem;
    width: 47rem;
`

export const ContainerFooter = styled.footer`
    width: 100%;

    p{
        line-height: 1.6;
        color: ${(props) => props.theme['white']};
        font-weight: bold;
    }
`

export const TextareaCuston = styled.textarea`
    width: 100%;
    background-color: ${(props) => props.theme['gray1_background']};
    border:none;
    margin-top: 1rem;
    resize: none;
    padding: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme['gray7_text-titles']};
    line-height: 1.4;
    height: 6rem;
`

export const ButtonFooter = styled.button`
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['green']};
    font-weight:bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s;
    

    &:hover{
        background-color: ${(props) => props.theme['green-Light']} ;
    }
`
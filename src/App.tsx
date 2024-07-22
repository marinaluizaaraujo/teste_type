import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { ContainerPost, Wrapper } from "./styles";
import { Post } from "./Components/Post";
import { PostInterface } from "./Interface/PostInterface";

const posts: PostInterface[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/kaiD3v.png',
      name: 'Kaique melo',
      role: 'Futuro Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2024-08-12 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/irilva.png',
      name: 'Iris da Silva',
      role: 'Futura full-stack developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 🚀 ' },
      { type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design' },
      { type: 'link', content: '#uiux #userexperience' },
    ],
    publishedAt: new Date('2024-08-12 15:00:00'),
  }
]

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Sidebar />
          <ContainerPost>
            {posts.map((post)=>(
            <Post key={post.id}post={post} />
            ))}
          </ContainerPost>
      </Wrapper>
    </ThemeProvider>
  )
}

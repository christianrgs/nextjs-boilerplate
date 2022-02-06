import * as Styled from './styles'

interface IMainProps {
  title?: string
  description?: string
}

const Main = (props: IMainProps) => {
  const {
    title = 'Nextjs Boilerplate',
    description = 'TypeScript, React, Next.js, Styled Components, Jest and React Testing Library'
  } = props

  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  )
}

export default Main

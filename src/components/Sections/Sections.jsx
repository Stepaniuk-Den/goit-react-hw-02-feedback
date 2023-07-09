import { StyledSection } from "./Sections.styled"


const Sections = ({children, title}) => {
  return (
    <StyledSection>
      {title && <h2 className = "h2">{title}</h2>}
      {children}
    </StyledSection>
  )
}

export default Sections
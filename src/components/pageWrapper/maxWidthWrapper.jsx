import styled from 'styled-components'

const MaxWidthWrapper = styled.div`
  padding: 0 10%;
  background: ${({ bg }) => bg || ''};
  @media (max-width: 900px) {
    padding: 0 10%;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`

export default MaxWidthWrapper

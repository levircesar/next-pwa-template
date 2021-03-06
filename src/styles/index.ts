import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  main {
    flex: 1;
    overflow-x: auto;
    .header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 1rem;

      .headerText {
        h2 {
          font-size: 3rem;
        }
      }
      img {
        max-width: 25rem;
        width: 100%;
      }
    }

    .content {
      display: flex;
      margin: 0 auto;

      flex-direction: column;
      max-width: 1100px;
      width: 100%;

      height: 500px;
      padding: 1rem;

      p {
        margin-top: 1rem;
        font-size: 1.2rem;
      }
    }
  }
`

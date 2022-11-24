import styled from "styled-components";

export const SkillsContainer = styled.section`
  width: 100%;
  min-height: 8rem;
  max-width: ${({ theme }) => theme.utils.container};
  margin: 0 auto;
  margin-top: 7rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 10rem));
  justify-content: center;
  justify-items: center;
  gap: 1.5rem;

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .skill-item__fig {
    width: 100;
    height: 6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .skill-item__title {
    font-size: ${({ theme }) => theme.fontSize.xsm};
  }
`;

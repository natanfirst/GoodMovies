import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 800px;

    .slick-prev {
        position: absolute;
        z-index: 1;
        left: 0;
        background: red;
    }

    .slick-next {
        position: absolute;
        right: 0;
        background: red;
    }

  .slid {
      height: 800px;
  }
`;



import * as React from 'react';
import styled from 'styled-components';

export const Banner = () => <Header></Header>;

export default Banner;

const Header = styled.header`
  background-image: url('https://img.freepik.com/premium-vector/futuristic-light-red-blue-gaming-header-social-media-banner-template_136469-1321.jpg');
  height: 25vh;
  background-size: cover;
  background-position: center;
}
  text-align: center;
`;
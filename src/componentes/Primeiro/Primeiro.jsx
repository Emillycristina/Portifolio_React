import React from 'react';
import { styled } from '@mui/system';
import Emilly from '../../assets/Emilly2.png';
import mao from '../../assets/mao-acenando.png';
import foguete from '../../assets/rocket.png';
import { Typography } from '@mui/material';

const Container = styled('div')({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
});

const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  
});

const Image = styled('img')({
  float: 'right',
  marginLeft: '120px',
  maxWidth: '100%',
  '@media (max-width: 700px)': {
    marginLeft: '2px',
  },
  
});

const Text = styled(Typography)(({ theme }) => ({
  marginTop: '250px',
  fontSize: '18px',
  color: "#FFF",
  '@media (max-width: 700px)': {
    marginTop: '0',
    fontSize: '14px',
  },
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: "#FFF",
}));

const PinkText = styled('span')({
  color: '#a233c7',
});

const SmallImage = styled('img')({
  width: '30px',
});

const SmallHandImage = styled('img')({
  width: '15px',
});

export default function Primeiro() {
  return (
    <Container>
      <div>
        <Image src={Emilly} alt="Emilly" />
      </div>
      <TextContainer>
        <Text>
          OLÁ <SmallHandImage src={mao} alt="Mão" />, MEU NOME É <PinkText>EMILLY</PinkText>
        </Text>
        <SmallText>DESENVOLVEDORA FRONT-END.</SmallText>
        <div>
          <SmallImage src={foguete} alt="Foguete" />
        </div>
      </TextContainer>
    </Container>
  );
}

import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { FaFilePdf } from "react-icons/fa";
import Emilly from "../../assets/foto_perfil.png";
import Curriculo from "../../assets/Curriculo Emilly.pdf";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor:"#7806d6",
  
});

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  maxHeight: 400,
  padding: theme.spacing(2),
  backgroundColor:"black",
}));

const ProfileImage = styled("img")({
  width: "20%",
  height: "auto",
  marginBottom: "16px",
});

const Paragraph = styled(Typography)({
  fontSize: "15px",
  marginBottom: "16px",
  color: "#FFF",
});

const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
 
});

export default function Contato() {
  const handleDownload = () => {
    const fileUrl = Curriculo;
    window.open(fileUrl, "_blank");
  };

  return (
    <Container>
      <StyledCard>
        <CardContent>
          <ProfileImage src={Emilly} alt="Profile" />
          <Typography variant="h6" color="#FFF">QUEM SOU EU?</Typography>
          <Paragraph variant="body5">
            Olá, meu nome é Emilly, sou estudante de desenvolvimento front-end,
            atualmente estou buscando melhorar meus conhecimentos em React e
            React-Native, tenho vários projetos em meu Github com consumo de
            API's, posteriormente pretendo me aprofundar em Node e Banco de
            dados relacionais. Espero que goste do meu portfólio!
          </Paragraph>
          <Paragraph variant="body5">
            Você consegue ter acesso a mais informações baixando meu currículo:
          </Paragraph>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDownload}
          >
            Curriculo em PDF <FaFilePdf style={{ marginLeft: "5px" }} />
          </Button>
        </CardContent>
      </StyledCard>
    </Container>
  );
}

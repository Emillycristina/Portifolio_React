import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {BsCalculator, BsCashCoin, BsFillShieldLockFill} from "react-icons/bs";
import {RiInstagramFill, RiScales2Fill} from "react-icons/ri";
import styles from './Principal.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000',
  padding: theme.spacing(5),
  textAlign: 'center',
  color: '#fff',
  backgroundImage: 'url(path/to/image.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: "0.3",
  
}));




export default function Principal() {
  const [repos, setRepos] = useState([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/Emillycristina/repos')
      .then(resposta => resposta.json())
      .then(json => {
        console.log(json);
        setRepos(json);
      })
      .catch(err => {
        console.log("ops");
      });
  }, []);

  return (
    
    <Box sx={{ flexGrow: 1 }} className={styles.container}  style={{padding:"40px", textAlign:"center", marginBottom:"10px"}}>
      {/* <h2 style={{marginRight:"20px"}}> PROJETOS </h2> */}
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          {repos[1] && (
            <Item className={styles.card}>
              <h4>{repos[1].name}</h4>
              {/* <p>{repos[1].url}</p> */}
              <BsCalculator className={styles.calculadora} />
            </Item>
          )}
        </Grid>
        <Grid item xs={6} sm={3}>
          {repos[8] && (
            <Item className={styles.card}>
              <h4>{repos[8].name}</h4>
              {/* <p>{repos[2].url}</p> */}
              <RiScales2Fill className={styles.balanca} />
            </Item>
          )}
        </Grid>
        <Grid item xs={6} sm={3}>
          {repos[3] && (
            <Item className={styles.card}>
              <h4>{repos[3].name}</h4>
              {/* <p>{repos[3].url}</p> */}
              <BsCashCoin className={styles.moeda} />
            </Item>
          )}
        </Grid>
        <Grid item xs={6} sm={3}>
          {repos[7] && (
            <Item className={styles.cardmaior}>
              <h4>{repos[7].name}</h4>
              {/* <p>{repos[7].url}</p> */}
              <BsFillShieldLockFill className={styles.cadeado} />
            </Item>
          )}
        </Grid>
        <Grid item xs={6} sm={3}>
          {repos[2] && (
            <Item className={styles.cardlateral}>
              <h4>{repos[2].name}</h4>
              {/* <p>{repos[8].url}</p> */}
              <RiInstagramFill className={styles.instagram} />
            </Item>
          )}
        </Grid>
        <Grid item xs={6} sm={3}>
          {repos[2] && (
            <Item className={styles.cardlateral}>
              <h4>{repos[2].name}</h4>
              {/* <p>{repos[8].url}</p> */}
              <RiInstagramFill className={styles.instagram} />
            </Item>
          )}
          </Grid>
          <Grid item xs={6} sm={3}>
          {repos[2] && (
            <Item className={styles.cardlateral}>
              <h4>{repos[2].name}</h4>
              {/* <p>{repos[8].url}</p> */}
              <RiInstagramFill className={styles.instagram} />
            </Item>
          )}
          </Grid>
          <Grid item xs={6} sm={3}>
          {repos[2] && (
            <Item className={styles.cardlateral}>
              <h4>{repos[2].name}</h4>
              {/* <p>{repos[8].url}</p> */}
              <RiInstagramFill className={styles.instagram} />
            </Item>
          )}
          
        </Grid>
      </Grid>
    </Box>
  );
}







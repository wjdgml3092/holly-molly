import React from "react";
import styled from "styled-components";
import style from '../styles/styles';
import night from '../assets/night.svg';
import PurpleCharacter from '../assets/purple.svg';
import Human from '../assets/human.svg';


const GameMiddleResult = (props) => {
    const {winner} = props;

    let role = "";
    let engRole = "";
    
    if(winner === "유령"){
        role = "유령";
        engRole = "GHOST";
    }else{ // human
        role = "인간";
        engRole = "HUMAN";
    }

      return (
        <React.Fragment>
                <Container>
                    <ResultTitle>중간 &nbsp;  결과</ResultTitle>
                    <CardContainer >
                        <WinnerRoleContext >{engRole}</WinnerRoleContext>
                        <CharacterContainer className="ghost">
                            {winner === "유령" ? 
                                <CharacterGhost ></CharacterGhost> : 
                                <CharacterHuman ></CharacterHuman>
                            }
                        </CharacterContainer>
                    </CardContainer>
                    <WinnerContext>현재 {role}이 이기고 있습니다.</WinnerContext>
                </Container>       
        </React.Fragment>
      );
  };
  
  const Container = styled.div`
    background-color: transparent; // transparent
    width: 650px;
    height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Title = styled.text`
    font-size: 40px;
    font-family: Gowun Dodum;
    -webkit-text-stroke: 1px #53305E;
    //font-weight: bold;
    color: #ffffff;
    text-shadow: 4px 4px 0px #2A132E, 4px 4px 0px #2A132E;
  `;

  const ResultTitle = styled.text`
    font-size: 60px;
    font-family: Black Han Sans;
    -webkit-text-stroke: 1px #53305E;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 4px 4px 0px #53305E, 5px 5px 0px #53305E, 6px 6px 0px #53305E, 
    7px 7px 0px #2A132E, 8px 8px 0px #2A132E, 9px 9px 0px #2A132E, 10px 10px 0px #2A132E; //#2A132E
  `;

  const WinnerRoleContext = styled.text`
    margin-top: 10px;
    font-size: 28px;
    font-family: Hahmlet;
    -webkit-text-stroke: 1px #53305E;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 4px 4px 0px #53305E, 4px 4px 0px #53305E;
  `;

  const WinnerContext = styled.text`
    margin-top: 50px;
    font-size: 25px;
    font-family: Gowun Dodum;
    //-webkit-text-stroke: 1px #53305E;
    //font-weight: bold;
    color: #ffffff;
  `;


  const CharacterHuman = styled.div`
    background-image: url(${Human}); 
    background-size: cover;
    width: 120px;
    height: 180px;
  `;

  const CharacterGhost = styled.div`
    background-image: url(${PurpleCharacter}); 
    background-size: cover;
    width: 120px;
    height: 180px;
  `;

  const CardContainer = styled.div`
    width: 180px;
    height: 260px;
    margin-top: 50px;
    border: 2px solid #FFFFFF;
    background-color: #060010;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.4); /* offset-x | offset-y | blur-radius | spread-radius | color */

    .ghost {
        animation: motion 1.5s linear 0s infinite;
        margin-bottom: 0;
    }
    
    @keyframes motion {
        0% {
            margin-bottom: 4px;
        }
        10% {
            margin-bottom: 7px;
        }
        20% {
            margin-bottom: 10px;
        }
        30% {
            margin-bottom: 12px;
        }
        40% {
            margin-bottom: 14px;
        }
        50% {
            margin-bottom: 16px;
        }
        60% {
            margin-bottom: 14px;
        }
        70% {
            margin-bottom: 12px;
        }
        80% {
            margin-bottom: 10px;
        }
        90% {
            margin-bottom: 7px;
        }
        100% {
            margin-bottom: 4px;
        }
    }
`;

  const CharacterContainer = styled.div`
    width: 160px;
    height: 260px;
    background-color: transparent;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`;

  export default GameMiddleResult;
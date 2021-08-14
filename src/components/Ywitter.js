import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import YwitterBg from "../assets/images/YwitterBg.png"

const Ywitter = () => {
  return (
    <YwitterContainer>
      <YwitterContent>
        <YwitterH1 data-sal="slide-up">
          Ywitter와 함께 여행지를 공유해보세요!
        </YwitterH1>
        <YwitterBtn
          href="https://yongho5580.github.io/Ywitter/#/"
          target="_blank"
        >
          Go to Ywitter
        </YwitterBtn>
      </YwitterContent>
    </YwitterContainer>
  )
}

export default Ywitter

const YwitterContainer = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  background-color: #ffffff;
`
const YwitterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const YwitterH1 = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  margin-bottom: 100px;
  font-weight: bold;
`

const YwitterBtn = styled.a`
  text-decoration: none;
  background-color: #bddbfa;
  color: white;
  border-radius: 20px;
  font-size: clamp(1.5rem, 5vw, 2rem);
  padding: 1.5rem 2rem;
  font-weight: bold;

  &:hover {
    background-color: #d5e8fc;
    transform: translateY(-2px);
  }
`

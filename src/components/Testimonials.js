import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
  //
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["man-1", "man-2"] }
          childImageSharp: {}
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <TestimonialsContainer>
      <TopLine>주변 친구들</TopLine>
      <Description>세계 여행을 갈 수 있다면?</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>서원우</h3>
            <p>
              "제가 아직 해외는 나가본적이 없지만, 만약 갈 수 있다면 먼저 일본을
              가보고 싶어요. 최근에 친구와 일식집을 가게 됐는데 무엇보다 초밥의
              매력에 푹 빠져버렸지 뭐에요! 일본의 본고장에서 먹는 초밥의 맛은
              어떨지 굉장히 궁금하고 이색적인 거리의 매력도 느껴보고 싶습니다."
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #feca57;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>오영석</h3>
            <p>
              "코로나 이전에 가봤던 런던을 다시 한 번 가보고 싶군요. 다른 문화,
              다른 인종, 다른 건축물.. 한국과는 많이 다른 여러 요소들을 직접
              눈으로 보고 느꼈을 때의 느낌은 아직도 이루 말할 수 없을 것 같아요.
              런던에서 사귀었던 좋은 친구들과 아직 연락은 하지만 실제로 만나지는
              못하는 지금 상황에서 먼저 가보고 싶은 곳은 런던이에요."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`
const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`

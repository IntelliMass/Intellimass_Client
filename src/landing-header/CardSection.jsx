import React from 'react'
import styled, { keyframes } from 'styled-components'
import { InnerLayout } from './Outer'
import card from '../assets/creditcard.svg'
import { fadeInLeft } from 'react-animations'
import bgCircles from '../assets/circleBg.svg';

export const CardSection = () => {
    return (

        <div className="features-list">
            <h2 data-aos='fade-left' data-aos-duration='3000' className="landing-page-title" >
                Demo
            </h2>
            <CardSectionStyled id='card'>
                <InnerLayout >
                    <div className="card-container">
                        <div  className="card-left">
                            <h2 data-aos='fade-right' data-aos-duration='3000' className="secondary-heading" >
                                Demo 1 - Discover articles by using network
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit doloremque quia? Odit illo, tempore quod vero exercitationem,
                                voluptatum laudantium quo harum, adipisci tenetur eum.
                            </p>
                        </div>
                        <div className="card-right">
                            <img src={card} alt="" />
                        </div>
                    </div>
                </InnerLayout>
            </CardSectionStyled>
            <CardSectionStyled id='card'>
                <InnerLayout >
                    <div className="card-container">
                        <div  className="card-left">
                            <h2 data-aos='fade-right' data-aos-duration='3000' className="secondary-heading" >
                                Demo 2 - Discover articles by different types of metadata
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit doloremque quia? Odit illo, tempore quod vero exercitationem,
                                voluptatum laudantium quo harum, adipisci tenetur eum.
                            </p>
                        </div>
                        <div className="card-right">
                            <img src={card} alt="" />
                        </div>
                    </div>
                </InnerLayout>
            </CardSectionStyled>

            <CardSectionStyled id='card'>
                <InnerLayout >
                    <div className="card-container">
                        <div  className="card-left">
                            <h2 data-aos='fade-right' data-aos-duration='3000' className="secondary-heading" >
                                Demo 3 - Discover articles by grouping them into categories
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit doloremque quia? Odit illo, tempore quod vero exercitationem,
                                voluptatum laudantium quo harum, adipisci tenetur eum.
                            </p>
                        </div>
                        <div className="card-right">
                            <img src={card} alt="" />
                        </div>
                    </div>
                </InnerLayout>
            </CardSectionStyled>
        </div>
    )
}

const FadeInLeft = styled.h1`
   animation: 2s ${keyframes`${fadeInLeft}`};
`

const CardSectionStyled = styled.section`
   .card-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 845px){
         grid-template-columns: repeat(1, 1fr);
      }

      .card-right{
         display: flex;
         justify-content: flex-end;
      }
      .card-left{

         p{
            padding: 1rem 0;
         }
      }
   }
`

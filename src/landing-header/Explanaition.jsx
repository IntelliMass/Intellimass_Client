import React from 'react'
import styled from 'styled-components'
import {ExplanaitionCard} from './ExplanaitionCard'
import { InnerLayout } from './Outer'
import card from '../assets/creditcard.svg';
import active from '../assets/active.svg';
import inactive from '../assets/inactive.svg';
import check from '../assets/check.svg';
import checkDisabled from '../assets/check-disabled.svg';
import bgCircles from "../assets/circleBg.svg";



export const ExplanationSection = () => {
    return (
        <PaymentStyled id='pricing'>
            <InnerLayout>
                <h2 data-aos='fade-left' data-aos-duration='3000' className="landing-page-title" >
                    Goals and results
                </h2>
                <img src={bgCircles} className="bgCircle" alt="" style={{position: 'absolute', marginLeft: -10}}/>
                <div className='card-con'>
                    <ExplanaitionCard
                        background={'#F08080'}
                        account={'Regular research'}
                        amount={'Time for search: Days'}
                        text={'Searching articles in search engines and get into each article to discover'}
                        check={check}
                        text1={'Searching options: Search on linear list of articles'}
                        text2={'Discover option: Etch article discover stand alone'}
                        text3={'Structure: List'}
                        text4={'Export: none'}
                    />

                    <ExplanaitionCard
                        background={'#3CB371'}
                        account={'InteliMass research'}
                        amount={'Time for search: Hours'}
                        text={'Searching by articles metadata by using the similarity of filtered connected group of articles'}
                        check={check}
                        text1={'Searching options: Search on metadata, categories groups'}
                        text2={'Discover option: all articles discover as a connected group'}
                        text3={'Structure: List, Network'}
                        text4={'Export: into collections'}
                    />
                    <img src={bgCircles} className="bgCircle" alt="" style={{position: 'absolute', marginLeft: 1100, marginTop: 500}}/>
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

export const PaymentStyled = styled.section`
 .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 6.4rem;
        
        @media screen and (max-width: 689px){
          grid-template-columns: repeat(1, 1fr);
        }
    }
   p{
      text-align: center;
   }
`

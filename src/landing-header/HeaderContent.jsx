import React from 'react'
import styled from 'styled-components'
import message1 from '../assets/message_pink.svg';
import message2 from '../assets/message_blue.svg';
import {AuthenticationForm} from "../components/authentication-form/AuthenticationForm";
import "./Header.scss"

const HeaderContent = () => {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text-container">
                    <h1 style={{color: "#f4f6f8"}} data-aos='zoom-in-right'>IntelliMass</h1>
                    <p className="white-text">
                        IntelliMass is an aggregator of open access research papers from repositories and journals.
                        We serve the global network of repositories and journals by increasing the discoverability and reuse of open access content.
                        We provide solutions for content management, discovery and scalable machine access to research.
                    </p>
                    <p className="white-text">
                        IntelliMass’s mission is to aggregate open access research worldwide and deliver unrestricted access for all.
                        <br/>
                        In doing so, we:
                        <ul>
                            <li>
                                Enrich scholarly data using state-of-the-art text and data mining technologies to aid discoverability.
                            </li>
                            <li>
                                Enable others to develop new tools and use cases on top of the Intellimass platform.
                            </li>
                            <li>
                                Facilitate a scalable, cost-effective route for the delivery of open scholarship.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="right-content">
                <AuthenticationForm/>
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" style={{marginLeft: 30, marginTop: 20}}/>
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   padding-top: 3rem;

   @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
   }

   .left-content{
      display: flex;
      align-items: center;
      padding-right: 3rem;
      @media screen and (max-width: 480px){
         width: 100%;
      }

      h1{
         font-size: 4rem;
         font-weight: 600;
         @media screen and (max-width: 700px){
            font-size: 3rem;
         }
      }
      .white{
      color: #fff;
      line-height: 1.8rem;
      }
   }
   .right-content{
      position: relative;
      display: flex;
      justify-content: center;


      .phone{
         width: 80%;
      }
      .ring1{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
      }
      .message1{
         position: absolute;
         top: 0;
         right: 0;
         left: auto;
         animation: move 5s infinite;
         transition: all .4s ease-in-out;
      }
      .message2{
         position: absolute;
         bottom: 15%;
         left: 0;
         transition: all .4s ease-in-out;
         animation: move 8s infinite;
         animation-delay: .5s;
         transition: all .4s ease-in-out;

      }
   }

    //Header Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }

`

export default HeaderContent

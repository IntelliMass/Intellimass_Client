import React from 'react';
import styled from 'styled-components';

export function ExplanaitionCard({
                  background, account, amount, text, check, text1, text2, text3, text4
              }) {
    return (
        <CardStyled style={{background: "white", zIndex: 20}}>
            <h4 className="card-title" style={{color: background}}>
                {account}
            </h4>
            <p className="c-para">{text}</p>
            <div className="list-con">
                <p className="text-check">
                    <img src={check} alt="" />
                    {amount}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text1}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text2}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text3}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text4}
                </p>
            </div>
        </CardStyled >
    )
}

const CardStyled = styled.div`
    opacity: 0.8;
    padding: 3rem 2rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    color: black;
  
    .card-title{
        font-size: 3rem;
        color: #2C4CA2;
        text-align: center;
        padding: 1.5rem 0;
    }
  .c-para{
    color: #333333;
    font-size: 18px;
  }
    .button-con{
        text-align: center;
        padding: 1.4rem 0;
        button{
            border: 2px solid #16194F;
            padding: .6rem 1.5rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;
            color: #16194F;
        }
    }
    .card-image-con{
        display: flex;
        justify-content: center;
        img{
            width: 70%;
        }
    }
    .plan-con{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.4rem 0;
        img{
            padding: 0 .2rem;
        }
    }
    .text-check{
        display: flex;
        align-items: center;
        padding: .3rem 0;
        font-size: 1.1rem;
        img{
            padding-right: .3rem;
            width: 24px;
        }
    }
`;


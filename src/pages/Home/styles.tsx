import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 80vw;
    height: 80vh;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.4);
    border-radius: 10px;
    display: flex;
    overflow: hidden;
`
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    padding: 15px 30px;
    h1{
        font-size: 35px;
    }
    form{
        display: flex;
        flex-direction: column;
        & > *{
            width: 100%;
            margin: 10px 0;
        }
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            input{
                width: 49%;
            }
        }
        input{
            font-size: 20px;
            padding: 10px;
            border-radius: 10px;
            height: 50px;
            border: none;
            box-shadow: -2px -2px 5px rgba(100,100,100,0.2), 2px 2px 5px rgba(0,0,0,0.5);
        }
    }
    button{
        height: 50px;
        border: none;
        border-radius: 20px;
        background-color: #648364;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
`
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    position: relative;
`

type CardProps = {
    side: string
}

export const CardContainer = styled.div<CardProps>`
    width: 80%;
    height: 50%;
    background: linear-gradient(90deg, rgba(66,235,201,1) 0%, rgba(0,159,255,1) 100%);
    color: white;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    transform: ${props => props.side == "front" ? "rotateY(0deg);" : "rotateY(180deg);"};
    transition: all 1s ;
    padding-bottom: 50px;
    position: relative;
    p.number{
        font-size: 30px;
        letter-spacing: 2px;
        word-spacing: 10px;
        display: ${props => props.side == "front" ? "inline" : "none"};
    }
    p.valid{
        font-size: 20px;
        letter-spacing: 2px;
        margin-left: 40%;
        display: ${props => props.side == "front" ? "inline" : "none"};
    }
    p.name{
        font-size: 20px;
        letter-spacing: 2px;
        display: ${props => props.side == "front" ? "inline" : "none"};
    }
    p.cvv{
        transform: rotateY(180deg);
        font-size: 20px;
        letter-spacing: 2px;
        display: ${props => props.side == "back" ? "inline" : "none"};
        position: absolute;
        top: 140px;
        right: 190px;
    }
`

export const Tarja = styled.div<CardProps>`
    width: 80%;
    height: 80px;
    background-color: ${props => props.side == "back" ? "black" : "transparent"};
    position: absolute;
    transition: ${props => props.side == "back" ? "all 0.5s 0.8s" : "all 0s 0s"};
    top: 220px;
`
import styled from 'styled-components';
import CardForm from './CardForm';
// import { Container } from 'semantic-ui-react';


const BottomForm = styled.div`
    margin: 0 auto;
    background-color: #F4F6F8;
`


const EventTemplete = styled.div`
    display: block;
    margin: 16px 0 24px;
    text-align: center;
`

const EventButton = styled.a`
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    line-height: 0;
    border-radius: 27px;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 4%);
    background-color: #fdfdfd;
    cursor: pointer;
        
    &:before{
    content: "";
    display: inline-block;
    width: 56px;
    height: 53px;
    background-position: 0 0;
    vertical-align: top;
    margin: 0 12px 0 24px;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png");
    -webkit-background-size: 372px 361px;
    background-size: 372px 361px;
    background-repeat: no-repeat;
    }    
    &:after{
        content: "";
    display: inline-block;
    width: 13px;
    height: 13px;
    background-position: -147px -111px;
    vertical-align: top;
    margin: 20px 24px 0 4px;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png");
    -webkit-background-size: 372px 361px;
    background-size: 372px 361px;
    background-repeat: no-repeat;
    }   
`

const EventSpan = styled.span`
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    /* background: #03c75a; */

`
const EventLabel = styled.span`
    font-size: 15px;
    line-height: 53px;
    letter-spacing: -.5px;
    color: #767678;
    vertical-align: top;
       
`

const BodyForm = () => {
    return (
            <BottomForm>
                <EventTemplete>
                    <EventButton>
                        <EventLabel>이벤트 모아보기</EventLabel>
                    </EventButton>
                </EventTemplete>
            
            </BottomForm>

    )
}

export default BodyForm

import styled from 'styled-components';
import Weather from './Card/Weather';
import CoronaInfro from './Card/CoronaInfro';
import Promotion from './Card/Promotion';
import Ad from './Card/Ad';
import Ad2 from './Card/Ad2';
import Ad3 from './Card/Ad3';
import Now from './Card/Now';
import Adbanner from './Adbanner';
import NaverBanner from './Card/NaverBanner';

const Root = styled.div`
    display: block;
    background-color: #F4F6F8;
    height: 1000px;
`
const InnerComponent = styled.div`
    width: 100%;
    position: relative;

    margin: 0 auto;
    @media  (min-width: 1152px) {
        margin: 0 auto;
        max-width: 1190px;
    }
    @media  (min-width: 600px)   {
        /* margin: 0 27px; */
    }
    @media  (min-width: 500px) {
        /* margin: 0 30px; */
    }


`

const Bricks  = styled.div`
    /* display: flex; */
    margin: 0 auto;
    width: 100%;
    float: left;
    position: relative;
    @media (min-width: 1152px) {
        width: 33.3333%;
        max-width: 1104px;
    }
    @media  (min-width: 600px)   {
        /* width: 50%; */
    }
    @media  (min-width: 500px) {

    }

`
const Card = styled.div`
    /* display: block; */
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    position: relative;
    max-height: 420px;
    @media screen and (min-width: 1152px) {
        margin-left: 12px;
        margin-right: 12px;
    }
    @media screen and (max-width: 600px) {
        margin-left: 9px;
        margin-right: 9px;
        margin-top: 8px;
        margin-bottom: 8px;
    }
`

const CardForm = () => {
    return (
        <Root>
            <InnerComponent>
                <Bricks>
                <Card><NaverBanner/></Card>
                <Card><Adbanner/></Card>
                {/* <Card><Weather/></Card> */}
        
        
 
                <Card><Ad></Ad></Card>
                </Bricks>
                <Bricks>
                    <Card><Now></Now></Card>
                    <Card><Ad2></Ad2></Card>
                    <Card><Ad3></Ad3></Card>
                </Bricks>

                <Bricks>
                <Card><CoronaInfro/></Card>
                <Card><Promotion></Promotion></Card>
     
                </Bricks>
            </InnerComponent>
            
        </Root>
    )
}

export default CardForm
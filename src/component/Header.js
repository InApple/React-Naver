import styled , { css,  } from 'styled-components';
import { Input, Button, Icon, Container } from 'semantic-ui-react'
import SearchForm from './SearchForm';

const HeaderForm = styled.div`
background-color: #F4F6F8;
display: flex;
padding-top: 120px;
/* height: 120px; */
`

const LeftSide = styled.div`
    position: absolute;
    top: 8px;
    left: 10px;
`

const RightSide = styled.div`
    background-color: transparent;
    min-width: 240px;
    position: absolute;
    top: 8px;
    right: 10px;

`
const ButtonLinker = styled.a`
    display: block;
    margin-left: 8px;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    border: none;

    height: auto;
    line-height: 19px;
    position: relative;
    float: left;

`

const AsideSpan = styled.span`
    width: 44px;
    height: 44px;
    background-position: -49px -145px;
    display: block;
    /* 네이버 아이콘 가져오기 */
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
`

const iConSpan = styled.span`
    width: 44px;
    height: 44px;
    background-position: -49px -145px;
    display: block;
    /* 네이버 아이콘 가져오기 */
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
    ${({ isNpay }) =>
    isNpay &&
    `
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
  `}
      ${({ isBell }) =>
    isBell &&
    `
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
  `}
      ${({ isNa }) =>
    isNa &&
    `
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
  `}
`

const QRSpace = styled.div`
display: block;
    padding: 7px 0 8px;
    position: relative;
    float: left;
`

const iConSpace = styled.div`

    position: relative;
    float: left; 
`

const QRSpan = styled.span`
    position: relative;
    float: left;
    width: 64px;
    height: 29px;
     /* 네이버 QR 체크인 아이콘 가져오기 */
     background-position: -196px -145px;
    display: block;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
`
const NpaySpan = styled.span`
    height: auto;
    line-height: 19px;
    position: relative;
    float: left;
    width: 40px;
    height: 44px;
    margin-left: 8px;
     /* 네이버 NPAY 아이콘 가져오기 */
    background-position: -89px -191px;
    display: block;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
`
const BellSpan = styled.span`
    height: auto;
    position: relative;
    float: left;
    width: 40px;
    height: 44px;
    display: block;
    margin-left: 1px;
    /* 네이버 벨 아이콘 가져오기 */
    background-position: -44px -191px;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
`
const NaSpan = styled.span`
position: relative;
    float: left;
    width: 44px;
    height: 44px;
    display: block;
    margin-left: 1px;
    /* 네이버 na 아이콘 가져오기 */
    background-position: -261px -75px;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
`



const Header = () => {
    return (
        <Container>
        <HeaderForm>

            <LeftSide>
            
                <ButtonLinker className='menu' alt="menu" >
                    <AsideSpan className='bars' alt="bars" />

                </ButtonLinker>
            </LeftSide>
            <RightSide>
                <QRSpace>
                    <ButtonLinker>
                        <QRSpan className='qr_check' alt="QR" src='qr_check.png'/>
                    </ButtonLinker>
                </QRSpace>
                <iConSpace>
                <ButtonLinker>
                    <NpaySpan className='npay' alt="napay" src='pay.png'/>
                </ButtonLinker>
                </iConSpace>

                <iConSpace>
                <ButtonLinker>
                    <BellSpan className='bell' alt="bell" src='bell_icon.png'/>
                </ButtonLinker>
                </iConSpace>

                <iConSpace>
                <ButtonLinker>
                    <NaSpan className='na' alt="na" src='na.png'/>
                </ButtonLinker>
                </iConSpace>

            </RightSide>
    
  


       

        </HeaderForm>
        </Container>
        


    )
}

export default Header
import styled , { css,  } from 'styled-components';


const FootForm = styled.footer`
    width: 100%;
    /* height: 100px; */
    margin-top: auto;
    background-color: #F4F6F8;
    box-sizing: border-box;
    position: fixed;
    bottom: 0; 
    
`

const FootTemplete = styled.footer`
    padding-top: 36px;
    padding-bottom: 79px;
    min-width: 270px;

`

const FoooterLabel = styled.text`
    color: #70757a;
    font-size: 15px;
    display: block;
    border-bottom: 1px solid #dadce0;
    padding: 15px 30px;
`


const FootLayout = styled.div`
    font-size: 0;
    line-height: 0;
    /* white-space: nowrap; */
    text-align: center;
`



const FoooterLink = styled.a`
    position: relative;
    display: inline-block;
    padding: 3px 9px;
    color: #929294;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;

    /* 간자 */
    letter-spacing: -.5px;
    text-decoration: none;
    &:hover {
        color: #70757a;
        text-decoration: underline;

    }
    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 7px;
        left: 0;
        width: 1px;
        height: 10px;
        background-color: #d7dfe7;
    }
`
const Logo = styled.img`
    width: 74px;
    height: 14px;
    background-position: 0 -100px;
    margin: 16px 0 2px;
    display: inline-block;
    color: transparent;
    overflow: hidden;
    vertical-align: top;

`
const Footer = () => {
    return (
        <FootForm>
           <FootTemplete>
           <FootLayout>
            <FoooterLink href=''>로그인</FoooterLink>
            <FoooterLink href=''>전체서비스</FoooterLink>
            <FoooterLink href=''>PC버전</FoooterLink>
        </FootLayout>
        <FootLayout>
            <FoooterLink href=''>이용약관</FoooterLink>
            <FoooterLink href=''>개인정보처리방침</FoooterLink>
            <FoooterLink href=''>고객센터</FoooterLink>
        </FootLayout>
        <FootLayout>
            <a href=""><Logo className='logo' alt="google" src='naver_gray.png'></Logo></a>
            
        </FootLayout>
           </FootTemplete>
        
        </FootForm>
    )
}

export default Footer
import styled from 'styled-components';


const BannerBlock = styled.div`
margin-top: 0;
    &:after{
        display: block;
        clear: both;
        content: '';
}
    }
`

const BannerContent = styled.div`
    padding: 0 16px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
    overflow: hidden;
    position: relative;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    background-color: #fff;
    @media only screen and (min-width: 1152px)   {
        margin-left: 12px;
        margin-right: 12px;
    }
    @media only screen and (min-width: 600px)   {
        margin-left: 9px;
        margin-right: 9px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

`

const BannerLink = styled.a`
    display: flex;
    cursor: pointer;
    text-align: center;
    color: inherit;
    text-decoration: none;
    align-items: center;
    height: 80px;
}
    &:before{
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        background-position: -92px -160px;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        margin-right: 10px;
        background-image: url(https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png);
        -webkit-background-size: 372px 361px;
        background-size: 372px 361px;
        background-repeat: no-repeat;
    }
}
`

const Text = styled.p`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -.3px;
    color: #424242;

}
`
const TextBold = styled.em`
    padding-left: 4px;
    font-weight: 700;
    font-style: normal;
}
`
const TextSpan = styled.span`
color: #767678;
`


const ButtonSpan = styled.span`
margin-left: auto;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -.5px;
    color: #03c95b;
    white-space: nowrap;
    &:after{
        content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border: solid #03c95b;
    border-width: 1px 1px 0 0;
    transform: rotate(45deg);
    margin: 0 4px 1px 2px;
    }

`
const Xbutton = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    padding: 5px;
    border: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border-radius: 0;
    background: 0 0;
    &:before{
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background-position: -343px -216px;
        background-image: url(https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png);
        background-size: 372px 361px;
        background-repeat: no-repeat;
    }

`

const NaverBanner = () => {
    return (
        <BannerBlock>
            <BannerContent>
                <BannerLink>
                    <Text>
                        더 편리해진 AI 검색 기능
                        <br/>
                        <TextBold> 네이버앱</TextBold>
                        <TextSpan>에서 만나보세요</TextSpan>
                    </Text>
                    <ButtonSpan>
                        앱 사용
                        <span>하기</span>
                    </ButtonSpan>
                </BannerLink>

            </BannerContent>
        </BannerBlock>
      


    )
}

export default NaverBanner
import styled from 'styled-components';


const NowBlock = styled.div`
     margin-top: 0;
     overflow: hidden;
    width: 100%;
    padding: 0;
    &:after{
        display: block;
        clear: both;
        content: '';
}
    }
`

const NowContent = styled.div`
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
    &:after{
    }
`

const NowLink = styled.a`
    position: relative;
    display: block;
    width: 70px;
    z-index: 2; 
    cursor: pointer;
    &:before{

}
`

const NowTitle = styled.h3`
    position: relative;
    padding: 20px 0 14px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -.5px;
    color: #1e1e23;
    margin: 0;

}
`
const NowLogo = styled.span`
    width: 48px;
    height: 14px;
    background-position: -47px -295px;
    display: inline-block;
    overflow: hidden;
    margin: 4px 6px 0 0;
    color: transparent;
    vertical-align: top;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: -webkit-transform .35s cubic-bezier(.33,1,.68,1);
    transition: -webkit-transform .35s cubic-bezier(.33,1,.68,1);
    transition: transform .35s cubic-bezier(.33,1,.68,1);
    transition: transform .35s cubic-bezier(.33,1,.68,1),-webkit-transform .35s cubic-bezier(.33,1,.68,1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    background-image: url(https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png);
    -webkit-background-size: 372px 361px;
    background-size: 372px 361px;
    background-repeat: no-repeat;
}
`


const ThumnailBox = styled.div`

    margin-left: -16px;
    margin-right: -16px;

`
const IconUL = styled.ul`
    padding: 0;
    margin: 0;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    
`

const Iconli = styled.li`
    padding-left: 10px;
    padding-bottom: 20px;
    list-style: none;
    font-size: 16px;
    width: 100px;

`

const ImageLink = styled.a`
    width: 100px;
    height: 138px;
    display: block;
    position: relative;
    overflow: hidden;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    &:before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid rgba(0,0,0,.04);
        -webkit-border-radius: inherit;
        border-radius: inherit;
}
}
`
const ImageBox = styled.div`
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 8px;
    /* border-radius: inherit; */
    &:after{
        content: "";
        display: inline-block;
        padding-top: 40.58%;
        vertical-align: top;
    }
    &:before{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        border: 1px solid rgba(0,0,0,.04);
        /* -webkit-border-radius: inherit; */
        /* border-radius: inherit; */
        content: '';
}
`
const ImageMain = styled.img`
    vertical-align: top;
    border: 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
}
`

const LogoBox = styled.div`

position: absolute;
    right: 0;
    bottom: 9px;
    left: 0;
    z-index: 1;
    -webkit-border-radius: 0;
    border-radius: 0;
    text-align: center;

    &:after{
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 49px;
    opacity: .8;
}
}
`

const TextLink = styled.a`
display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 10px 0 0 2px;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -.5px;
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
`



const IConImg = styled.img`
    max-width: 82px;
    max-height: 30px;
    vertical-align: bottom;
}
`
const InfoLabel = styled.div`
    overflow: hidden;
    padding-top: 5px;
`
const MainLabel = styled.strong`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -.5px;

`

const SubLabel = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -.5px;
    color: #767678;

}
`
const Now = () => {
    return (
        <NowBlock>
            <NowContent>
                <NowLink>
                    <NowTitle>
                        <NowLogo></NowLogo>
                    </NowTitle>
                    <ThumnailBox>
                            <IconUL>
                                <Iconli>
                                    <ImageLink>
                                    <ImageMain data-ondemand="true" width="100" height="138" alt="언제 들어도 행복한 크리스마스 캐롤" class="cnp_m" src="https://s.pstatic.net/nnow.phinf/20211208_277/16389291353396Befe_PNG/84d178.png?type=m180_240"/>
                                    <LogoBox>
                                    <IConImg data-ondemand="true" alt="언제 들어도 행복한 크리스마스 캐롤" class="cnp_logo" src="https://s.pstatic.net/nnow.phinf/20211208_103/1638929135236xlQIB_PNG/409163.png?type=m180_240"/>
                                    </LogoBox>
                                    </ImageLink>
                                    <TextLink href="#">언제 들어도 행복한 크리스마스 캐롤</TextLink>
                                </Iconli>
                                <Iconli>
                                    <ImageLink>
                                    <ImageMain data-ondemand="true" width="100" height="138" alt="휘모닝~~🌞☀️ 이동휘의 플리" class="cnp_m" src="https://s.pstatic.net/nnow.phinf/20211211_186/1639181160482Hrq9j_PNG/f41e87.png?type=m180_240"/>
                                    <LogoBox>
                                    <IConImg data-ondemand="true" alt="휘모닝~~🌞☀️ 이동휘의 플리" class="cnp_logo" src="https://s.pstatic.net/nnow.phinf/20211022_43/1634879272220vPCd2_PNG/44f605.png?type=m180_240"/>
                                    </LogoBox>
                                    </ImageLink>
                                    <TextLink href="#">휘모닝~~🌞☀️ 이동휘의 플리</TextLink>
                                </Iconli>
                                <Iconli>
                                <ImageLink>
                                    <ImageMain data-ondemand="true" width="100" height="138" alt="🙋NEW 코너로 인사 드린 댸니" class="cnp_m" src="https://s.pstatic.net/nnow.phinf/20211211_44/16391492594231CxVh_PNG/c96472.png?type=m180_240"/>
                                    <LogoBox>
                                    <IConImg data-ondemand="true" alt="🙋NEW 코너로 인사 드린 댸니" class="cnp_logo" src="https://s.pstatic.net/nnow.phinf/20210517_52/1621221584647oaUrv_PNG/50971d.png?type=m180_240"/>
                                    </LogoBox>
                                    </ImageLink>
                                    <TextLink href="#">🙋NEW 코너로 인사 드린 댸니</TextLink>

                                </Iconli>
                                <Iconli>
                                <ImageLink>
                                    <ImageMain data-ondemand="true" width="100" height="138" alt="올데이 야작실 고퀄 밴드라이브" class="cnp_m" src="https://s.pstatic.net/nnow.phinf/20211116_22/1637063127827syUha_PNG/e80a9b.png?type=m180_240"/>
                                    <LogoBox>
                                    <IConImg data-ondemand="true" alt="올데이 야작실 고퀄 밴드라이브" class="cnp_logo" src="https://s.pstatic.net/nnow.phinf/20210910_155/1631264890018nOcw5_PNG/efcf69.png?type=m180_240"/>
                                    </LogoBox>
                                    </ImageLink>
                                    <TextLink href="#">올데이 야작실 고퀄 밴드라이브</TextLink>

                                </Iconli>
                            </IconUL>
                        </ThumnailBox>
                </NowLink>

            </NowContent>

        </NowBlock>
      


    )
}

export default Now
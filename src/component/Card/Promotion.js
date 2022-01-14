import styled from 'styled-components';


const PromotionCard = styled.div`
display: block;
overflow: hidden;
    width: 100%;
    padding: 0;
    &:after{
    display: block;
    clear: both;
    content: '';
}
`
const PromotionBlock = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 12px;
    margin-right: 12px;
    padding: 0 16px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
    background-color: #fff;
    border-radius: 8px;

`


const IconUL = styled.ul`
    padding: 0 20px;
    list-style: none;
`

const Iconli = styled.li`

`

const PromotionA = styled.a`
    position: relative;
    display: block;
    padding: 18px 0;
    color: inherit;
    text-decoration: none;
&:before{
    width: 20px;
    height: 16px;
    left: 0;
    background-position: -225px -230px;
    background-image: url(https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png);
    -webkit-background-size: 372px 361px;
    background-size: 372px 361px;
    background-repeat: no-repeat;
}

&:after{
    content: "";
    display: table;
    table-layout: fixed;
    clear: both;
}
`

const PromotionB = styled.a`
 position: relative;
    display: block;
    padding: 18px 0;
    color: inherit;
    text-decoration: none;
&:before{
    width: 20px;
    height: 16px;
    background-position: -182px -183px;
    right: 0;
    background-image: url(https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png);
    -webkit-background-size: 372px 361px;
    background-size: 372px 361px;
    background-repeat: no-repeat;
}

&:after{
    content: "";
    display: table;
    table-layout: fixed;
    clear: both;
}
`

const InfoLabel = styled.div`
    padding-right: 18px;
    text-align: right;
    padding-left: 38px;
    padding-top: 6px;
    padding-bottom: 5px;
    overflow: hidden;
    ${({ left }) =>
    left &&
    `
    text-align: left;
  `}
}
`

const MainLabel = styled.strong`
color: #9761ed;
overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -.32px;
    font-weight: bold;
${({ green }) =>
    green &&
    `
    color: #0ac666;
  `}
}
`

const SubLabel = styled.p`
    overflow: hidden;
    margin-bottom:0;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -.47px;
    color: #767678;

}
`

const ThumnailBox = styled.div`
    position: relative;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    white-space: nowrap;
    float: right;
    width: 52px;
    cursor: pointer;
    ${({ left }) =>
    left &&
    `
    float: left;
  `}
}

&:before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    border: 1px solid rgba(0,0,0,.04);
    border-radius: inherit;
}
&:after{
    content: "";
    display: inline-block;
    padding-top: 100%;
    vertical-align: top;
}
`

const ThumnailIMG = styled.img`
    /* border-radius: inherit; */
    border: 0;
    vertical-align: top;
    width: 52px;
    aspect-ratio: auto 52 / 52;
    height: 52px;
}
`

const Promotion = () => {
    return (
        <PromotionCard>
            <PromotionBlock>
            <IconUL>
            <Iconli>
                <PromotionA>
                    <ThumnailBox>
                        <ThumnailIMG src="https://s.pstatic.net/static/www/mobile/edit/20211206_1095/upload_1638777339825m0Pxf.png" width="52" height="52" alt="블루독과 한파 극복" onerror="this.outerHTML='<span class=\'comp_noimage\'><span class=\'blind\'>이미지 준비중</span></span>';"/>
                    </ThumnailBox>
                    <InfoLabel>
                        <MainLabel>
                            블루독과 한파 극복
                        </MainLabel>
                        <SubLabel>
                            블루독 감성의 겨울 코디 제안
                        </SubLabel>
                    </InfoLabel>

                </PromotionA>
            </Iconli>
            <Iconli>
                <PromotionA>
                    <ThumnailBox>
                        <ThumnailIMG src="https://s.pstatic.net/static/www/mobile/edit/20211210_1095/upload_1639119804713l5yY6.png" width="52" height="52" alt="오늘주문 저녁도착! 장보기판" onerror="this.outerHTML='<span class=\'comp_noimage\'><span class=\'blind\'>이미지 준비중</span></span>';"/>
                    </ThumnailBox>
                    <InfoLabel>
                        <MainLabel>
                            오늘주문 저녁도착! 장보기판
                        </MainLabel>
                        <SubLabel>
                            홈플러스 연말특집 20%↓+14%적립
                        </SubLabel>
                    </InfoLabel>

                </PromotionA>
            </Iconli>
            <Iconli>
                <PromotionB>
                    <ThumnailBox left = { true }>
                    <ThumnailIMG src="https://s.pstatic.net/static/www/mobile/edit/20211209_1095/upload_16390084106317fY34.jpg" width="52" height="52" alt="자동차판" onerror="this.outerHTML='<span class=\'comp_noimage\'><span class=\'blind\'>이미지 준비중</span></span>';"/>
                    </ThumnailBox >
                    <InfoLabel  left = { true }>
                        <MainLabel green = { true }>
                        자동차판
                        </MainLabel>
                        <SubLabel>
                        포드 레인저 풀체인지 출시예정
                        </SubLabel>
                    </InfoLabel>

                </PromotionB>
            </Iconli>
            <Iconli>
                <PromotionB>
                    <ThumnailBox left = { true }>
                    <ThumnailIMG src="https://s.pstatic.net/static/www/mobile/edit/20211102_1095/upload_1635816397716ptHjn.jpg" width="52" height="52" alt="뭐 볼지 고민된다면?" onerror="this.outerHTML='<span class=\'comp_noimage\'><span class=\'blind\'>이미지 준비중</span></span>';"/>
                    </ThumnailBox>
                    <InfoLabel  left = { true }>
                        <MainLabel green = { true }>
                            뭐 볼지 고민된다면?
                        </MainLabel>
                        <SubLabel>
                            주말에는 역시 웹툰 정주행!
                        </SubLabel>
                    </InfoLabel>

                </PromotionB>
            </Iconli>

            </IconUL>
            </PromotionBlock>
            

        </PromotionCard>


    )
}

export default Promotion
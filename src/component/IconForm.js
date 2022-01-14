import styled , { css,  } from 'styled-components';
import { Input, Button, Icon, Container } from 'semantic-ui-react'


const IconContainer = styled.div`
    width: 316px;
    margin: 0 auto;
    padding: 24px 0 37px;
    background-color: #F4F6F8;
    display: block;
    
    &:before{

    }

`

const IconUL = styled.ul`
    /* margin-left: -36px; */
    display: flex;
    flex-wrap: wrap;
    margin: -12px 0 0 -36px;
    padding: 0%;
    /* list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */
`
const Iconli = styled.li`
    padding-left: 36px;
    padding: 12px 0 0 36px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: list-item;
    list-style: none;
`

const IconLinker = styled.a`
    display: block;
    width: 52px;
    text-align: center;
`

const IconPic = styled.picture`


`

const IconBox = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    &:before{
        content: "";
        display: block;
        position: absolute;
        top: -2px;
        left: -3px;
        width: 50px;
        height: 50px;
        background-position: -163px -21px;
        background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
        -webkit-background-size: 323px 234px;
        background-size: 323px 234px;
        background-repeat: no-repeat;
}
`


const IconImg = styled.img`
    width: 44px;
    aspect-ratio: auto 44 / 44;
    height: 44px;
`

const IconLabel = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-top: 5px;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: -.55px;
    color: #1e1e23;
`

const IconForm = () => {
    return (
        <IconContainer>
            <IconUL>
                <Iconli>
                    <IconLinker>
                        <IconBox><IconImg src='news_icon_88x88_dark.png'/></IconBox>
                        <IconLabel>뉴스판</IconLabel>
                    </IconLinker>
                </Iconli>
                <Iconli>
                <IconLinker>
                        <IconBox><IconImg src='upload_16194099359615PPET.png'/></IconBox>
                        <IconLabel>쇼핑판</IconLabel>
                    </IconLinker>
                </Iconli>
                <Iconli>
                <IconLinker>
                        <IconBox><IconImg src='upload_16194098613516y6da.png'/></IconBox>
                        <IconLabel>경제지표판</IconLabel>
                    </IconLinker>
                </Iconli>
                <Iconli>
                <IconLinker>
                        <IconBox><IconImg src='upload_161940990062833vIT.png'/></IconBox>
                        <IconLabel>스포츠판</IconLabel>
                    </IconLinker>
                </Iconli>
                <Iconli>
                <IconLinker>
                        <IconBox><IconImg src='mobile_19411917574.png'/></IconBox>
                        <IconLabel>메일</IconLabel>
                    </IconLinker>
                </Iconli>
                <Iconli>
                <IconLinker>
                        <IconBox><IconImg src='mobile_191015178706.png'/></IconBox>
                        <IconLabel>카페</IconLabel>
                    </IconLinker>
                </Iconli>
                <Iconli>
                <IconLinker>
                        <IconBox><IconImg src='mobile_181505455420.png'/></IconBox>
                        <IconLabel>블로그</IconLabel>
                    </IconLinker>
                </Iconli>
                <Iconli>
                <IconLinker>
                        <IconBox><IconImg src='upload_1619497854375Q53rw.png'/></IconBox>
                        <IconLabel></IconLabel>
                    </IconLinker>
                </Iconli>


            </IconUL>

        
        </IconContainer>
        


    )
}

export default IconForm
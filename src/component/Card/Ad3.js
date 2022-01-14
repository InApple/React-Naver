import styled from 'styled-components';


const AdBlock = styled.div`
    display: block;
    overflow: hidden;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    border-radius: 8px;
    &:after{
        display: block;
        clear: both;
        content: '';
    }
`

const AdContent = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 0;
    padding-right: 0;
    background-color: #fff;
    /* border: none; */
    border-radius: 8px;
}    @media only screen and (min-width: 600px)   {
    margin-left: 9px;
    margin-right: 9px;
    }
    &:after{
    }
`
const ImageLink = styled.a`
    display: block;
    height: 40.58%;
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
    cursor: pointer;
    &:before{

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

const TextLink = styled.a`
    display: block;
    padding: 18px 15px;

    &:before{
        content: "";
        display: table;
        table-layout: fixed;
        clear: both;
}
`

const IconBox = styled.div`
    float: left;
    width: 50px;
    border-radius: 50%;
    margin-right: 12px;
    position: relative;

    white-space: nowrap;
    &:before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        /* border: 1px solid rgba(0,0,0,.04); */
        /* border-radius: inherit; */
}

&:after{
    content: "";
    display: inline-block;
    padding-top: 100%;
    vertical-align: top;
}
`


const IConImg = styled.img`
    border: 0;
    width: 50px;
    aspect-ratio: auto 50 / 50;
    height: 50px;
    position: relative;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    white-space: nowrap;
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
const Ad3 = () => {
    return (
        <AdBlock>
            <AdContent>
                <ImageLink>
                    <ImageBox>
                    <ImageMain src="https://s.pstatic.net/static/www/mobile/edit/20211209_1095/upload_1639036302271tPUej.jpg" width="100%" alt="고객과의 분쟁을 해결해주는 OO는?" onerror="this.outerHTML='<span class=\'comp_noimage\'><span class=\'blind\'>이미지 준비중</span></span>';"/>
                    </ImageBox>
                </ImageLink>
                <TextLink>
                    <IconBox>
                    <ImageMain src="https://s.pstatic.net/static/www/mobile/edit/20211209_1095/upload_16390362870343PMI7.jpg" width="50" height="50" alt="프로필" onerror="this.outerHTML='<span class=\'comp_noimage\'><span class=\'blind\'>이미지 준비중</span></span>';"/>
                    </IconBox>
                    <InfoLabel>
                        <MainLabel>
                        사장님들의 궁금한 이야기
                        </MainLabel>
                        <SubLabel>
                        고객과의 분쟁을 해결해주는 OO는?
                        </SubLabel>
                    </InfoLabel>
                </TextLink>
            </AdContent>

        </AdBlock>


    )
}

export default Ad3
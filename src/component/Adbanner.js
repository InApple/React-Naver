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
    &:after{
    }
`

const BannerLink = styled.a`
    cursor: pointer;
    padding-top: 3px;
    padding-bottom: 4px;
    display: block;
    text-align: center;
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
}
`

const BannerPicture = styled.picture`
    padding-top: 3px;
    padding-bottom: 4px;
    display: block;
    text-align: center;
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
}
`
const ImageMain = styled.img`
    max-width: 320px;
    width: 100%;
    height: auto;
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

const Adbanner = () => {
    return (
        <BannerBlock>
            <BannerContent>
                <BannerLink>
                    <BannerPicture>
                    <ImageMain src="https://ssl.pstatic.net/tveta/libs/1370/1370485/640b5a99fbe7de82a39c_20211207181552782.png" width="320" alt="" class="ccb_img"/>
                    </BannerPicture>
                    <Xbutton></Xbutton>
                </BannerLink>

            </BannerContent>
        </BannerBlock>
      


    )
}

export default Adbanner
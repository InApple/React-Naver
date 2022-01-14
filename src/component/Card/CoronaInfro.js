import styled from 'styled-components';


const CoronaBlock = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 12px;
    margin-right: 12px;
    padding: 0 16px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
    background-color: #fff;
    border-radius: 8px;
`
const IconContainer = styled.div`
border-radius: inherit;

`


const IconUL = styled.ul`
    display: flex;
    padding: 0 5px;
    list-style: none;
`

const Iconli = styled.li`
    flex: 1;
    display: list-item;
    text-align: -webkit-match-parent;
`

const CoronaStatusLink = styled.a`
    display: block;
    padding: 11px 0;
    color: inherit;
    
    text-decoration: none;
    text-align: center;
    &:before{
        width: 29px;
        height: 29px;
        background-position: -214px -164px;
        background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png");
        -webkit-background-size: 372px 361px;
        background-size: 372px 361px;
        background-repeat: no-repeat;
        content: "";
        display: block;
        margin: 0 auto 6px;
}
`

const CoronaVaccineLink = styled.a`
    display: block;
    padding: 11px 0;
    color: inherit;
    
    text-decoration: none;
    text-align: center;
    &:before{
        width: 29px;
        height: 29px;
        background-position: -214px -130px;
        background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png");
        -webkit-background-size: 372px 361px;
        background-size: 372px 361px;
        background-repeat: no-repeat;
        content: "";
        display: block;
        margin: 0 auto 6px;
}
`

const MedicalCenterLink = styled.a`
    display: block;
    padding: 11px 0;
    color: inherit;
    
    text-decoration: none;
    text-align: center;
    &:before{
        width: 29px;
        height: 29px;
        background-position: -343px 0;
        background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png");
        -webkit-background-size: 372px 361px;
        background-size: 372px 361px;
        background-repeat: no-repeat;
        content: "";
        display: block;
        margin: 0 auto 6px;
}
`
const FactCheckLink = styled.a`
    display: block;
    padding: 11px 0;
    color: inherit;
    
    text-decoration: none;
    text-align: center;
    &:before{
        width: 29px;
        height: 29px;
        background-position: -258px -252px;
        background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_search_9655b415.png");
        -webkit-background-size: 372px 361px;
        background-size: 372px 361px;
        background-repeat: no-repeat;
        content: "";
        display: block;
        margin: 0 auto 6px;
}
`
const InfoLabel = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -.2px;

`

const CoronaInfro = () => {
    return (
        <CoronaBlock>
            <IconUL>
                <Iconli>
                    <CoronaStatusLink>
                    <InfoLabel>확진현황</InfoLabel>
                    </CoronaStatusLink>
                </Iconli>
                <Iconli>
                    <CoronaVaccineLink>
                    <InfoLabel>잔여백신알림</InfoLabel>
                    </CoronaVaccineLink>
         
                </Iconli>
                <Iconli>
                    <MedicalCenterLink>
                    <InfoLabel>선별진료소</InfoLabel>
                    </MedicalCenterLink>
     
                </Iconli>
                <Iconli>
                    <FactCheckLink>
                    <InfoLabel>팩트체크</InfoLabel>
                    </FactCheckLink>

                </Iconli>
            </IconUL>

        </CoronaBlock>


    )
}

export default CoronaInfro
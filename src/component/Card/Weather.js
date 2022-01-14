import styled from 'styled-components';

const WeatherBlock = styled.div`
    display: flex;
    position: relative;
    margin-left: -6px;
`

const WeatherBlockPlace = styled.div`
    display: flex;
    position: relative;
    margin-left: -6px;
`
const WeatherBlockPlaceButton = styled.div`
    display: flex;
    position: relative;
    margin-left: -6px;
`


const WeatherIcon = styled.div`
    width: 38px;
    height: 26px;
    background-position: -82px -322px;
    position: absolute;
    top: 30px;
    left: 25px;
    -webkit-animation: ani_wt7_cloud2 2s cubic-bezier(.445,.05,.55,.95) alternate infinite;
    animation: ani_wt7_cloud2 2s cubic-bezier(.445,.05,.55,.95) alternate infinite;
    background-image: url(https://s.pstatic.net/static/www/m-new/uit/2021/sp_weather_animation_c2a5b9ac.png);
    -webkit-background-size: 472px 447px;
    background-size: 472px 447px;
    background-repeat: no-repeat;
`

const WeatherInfo = styled.div`

`

const NoticeBlock = styled.div`
    padding: 6px 0 30px;
`

const NoticeGuide = styled.p`
    color: #767678;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -.5px;
    text-align: center;
`
const Weather = () => {
    return (
        <div>
            <WeatherBlock>
                <WeatherBlock>
                    <WeatherBlockPlace>
                        <WeatherIcon/>
                        <WeatherInfo/>
                    </WeatherBlockPlace>
                    <WeatherBlockPlaceButton>
                    
                    </WeatherBlockPlaceButton>
                </WeatherBlock>
            </WeatherBlock>
            <NoticeBlock>
                <NoticeGuide>위치 찾기를 눌러 현 위치의 시간대별·주간날씨와
                    <br/>
                    미세먼지 예보를 여기에서 바로 보세요
                </NoticeGuide>
                
            </NoticeBlock>
        </div>


    )
}

export default Weather
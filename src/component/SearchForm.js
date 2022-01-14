import { Search } from "semantic-ui-react";
import styled , { css,  } from 'styled-components';
import { Input, Button, Icon, Container } from 'semantic-ui-react'



const SearchContainer = styled.div`
    background-color: #F4F6F8;
    position: relative;
    z-index: 1;
    max-width: 488px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    height: 52px;

    background: -webkit-linear-gradient(345deg,#03cf5d,#03c75a 100%);
    /* background: linear-gradient(105deg,#03cf5d,#03c75a 100%); */
    /* -webkit-border-radius: 26px; */
    border-radius: 26px;
    -webkit-box-shadow: 0 5px 10px 0 rgb(117 145 181 / 12%);
    box-shadow: 0 5px 10px 0 rgb(117 145 181 / 12%);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    &:before{
        content: "";
        display: block;
        position: absolute;
        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        background-color: #fff;
        /* -webkit-border-radius: 29px; */
        border-radius: 29px;
    }

`

const SearchBar = styled.a`
     padding-left: 40px;

`

const SearchLinker = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 0 5px 11px;
    cursor: pointer;
    

`

const NaverSpan = styled.span`
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    background: #03c75a;
    /* 네이버 아이콘 가져오기 */
    background-position: 0 -194px;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;

`

const SearchInput = styled.input`
    position: relative;
    width: auto;
    height: 22px;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #1e1e23;
    border: 0;
    outline: transparent;
    background: 0 0;
    -webkit-appearance: none;
    text-overflow: ellipsis;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;

`

const Mikediv = styled.div`
    position: absolute;
    top: 0;
    right: 4px;
    z-index: 10;
    padding: 8px 5px;
`

const MikeButton = styled.button`
    display: inline-block;
    vertical-align: top;
    border: 0;
    -webkit-appearance: none;
    padding: 8px 5px;
`



const MikeSpan = styled.span`
    position: absolute;
    /* top: 0; */
    /* padding-top: ; */
    right: 4px;
    width: 34px;
    height: 34px;
    background: #03c75a;
    /* 네이버 찾기 아이콘 가져오기 */
    /* background-position: -171px -191px; */
    background-position: -174px -194px;
    background-image: url("https://s.pstatic.net/static/www/m-new/uit/2021/sp_main_search_aa6fc0f7.png");
    background-size: 323px 234px;
`




const SearchForm = () => {
    return (
        <Container>
  
        <SearchContainer className='search'>
            <SearchBar>
            <SearchLinker> <NaverSpan className='naver_logo' alt="logo" src='naver.png'/></SearchLinker>
            <SearchInput placeholder="검색어를 입력해주세요."></SearchInput>
            </SearchBar>
            <Mikediv><MikeSpan className='search' alt="search" src='search.png'/></Mikediv>

        </SearchContainer>

        </Container>
        


    )
}

export default SearchForm
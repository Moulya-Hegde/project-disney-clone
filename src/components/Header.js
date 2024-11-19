import styled from "styled-components";
const Header=(props)=>{
    return <Nav>
        <Logo>
            <img src="./images/logo.svg" />
        </Logo>
        <NavMenu>
        <a href="/home">
        <img src="./images/home-icon.svg" />
        <span>HOME</span>
        </a>

        <a href="/home">
        <img src="./images/search-icon.svg" />
        <span>SEARCH</span>
        </a>

        <a href="/home">
        <img src="./images/watchlist-icon.svg" />
        <span>WATCHLIST</span>
        </a>

        <a href="/home">
        <img src="./images/original-icon.svg" />
        <span>ORIGINALS</span>
        </a>

        <a href="/home">
        <img src="./images/movie-icon.svg" />
        <span>MOVIES</span>
        </a>

        <a href="/home">
        <img src="./images/series-icon.svg" />
        <span>SERIES</span>
        </a>
        </NavMenu>
    </Nav>
}

const Nav=styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`
const Logo=styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img{
    display: block;
    width: 100%;
}
`
const NavMenu=styled.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0;
padding: 0;
position: relative;
margin-right: auto;
margin-left: 25px;
@media (max-width: 768px) {
    display: none;
}

a{
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 12px;
    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before{
            background-color: whitesmoke;
            border-radius: 0 0 4px 4px;
            content: "";
            height: 2px;
            bottom: -6px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
    &:hover{
        span:before{
            visibility: visible;
            transform: scaleX(1);
            opacity: 1 !important;
        }
    }
}
`


export default Header
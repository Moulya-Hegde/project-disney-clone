import styled from "styled-components";
import { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else {
        console.log("No user signed in.");
        navigate('/');
      }
    });
  
    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate]); // Only trigger when navigate changes (it's stable)
  

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const setUser = (user) => {
    console.log("Redux User Photo:", user.photoURL);
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" />
      </Logo>
      {!username ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <>
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
      <SignOut>
        <UserImg src={userPhoto} alt={username} />
        <DropDown>
          <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
      </SignOut>
      </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #0e081f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
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

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
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
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        visibility: visible;
        transform: scaleX(1);
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: #0e081f;
  border: 1px solid white;
  letter-spacing: 1.5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  align-items: center;
  padding: 8px 16px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: whitesmoke;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border-radius: 4px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${UserImg}{
    border-radius: 50%;
  width: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 100%;
      cursor: pointer;
      transition-duration: 1s;
    }
  }
`;

export default Header;

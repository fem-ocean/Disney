import styled from "styled-components";
import { auth, provider } from "./firebase"; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//useDispatch allows us dispatch actions to our store. useSelector allows us retrieve stuffs from our store.
import { useHistory } from 'react-router-dom';
import { 
  selectUserName, 
  selectUserEmail, 
  selectUserPhoto, 
  setUserLoginDetails,
  setSignOutState, 
} from "../features/user/userSlice"


function Header(props) {

  const dispatch = useDispatch();
  const history = useHistory();   //allows us to access history
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });

  },[userName]); 

  const handleAuth = () =>{
    if (!userName){
      auth
        .signInWithPopup(provider)
        .then((result)=>{
          setUser(result.user)
        })
        .catch((error) =>{
          alert(error.message)
        });
    }else if(userName){
      auth
        .signOut()
        .then(()=>{
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err)=> alert(err.message))
    }
    
  }

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="disneyplus"/>
      </Logo>

      {!userName ? <Login onClick={handleAuth}>Login</Login> : (
      
      <>
        <NavMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="home"/>
            <span>HOME</span>
          </a>

          <a href="/search">
            <img src="/images/search-icon.svg" alt="searchicon"/>
            <span>SEARCH</span>
          </a>

          <a href="/watchlist">
            <img src="/images/watchlist-icon.svg" alt="watchlisticon"/>
            <span>WATCHLIST</span>
          </a>

          <a href="/originals">
            <img src="/images/original-icon.svg" alt="originalicon"/>
            <span>ORIGINALS</span>
          </a>

          <a href="/movies">
            <img src="/images/movie-icon.svg" alt="movieicon"/>
            <span>MOVIES</span>
          </a>

          <a href="/series">
            <img src="/images/series-icon.svg" alt="series-icon"/>
            <span>SERIES</span>
          </a> 
        </NavMenu>
        <SignOut>
          <UserImg src={userPhoto} alt={userName}/>
          <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
          </DropDown>
        </SignOut>
      </>
      )}
      
    </Nav>

  )
}


const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
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

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  /* border: 1px solid brown; */
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px){
    display: none;
  }

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
      width: 20px;
      min-height: 20px;
      height: 20px;
    }

    span{
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      padding: 2px 0px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;
    
      &:before{
        content:"";
        background-color: rgb(249, 249, 249);
        display: block;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        width: auto;
        position: absolute;
        opacity: 0;
        right: 0px;
        left: 0px;
        transform: scaleX(0);  
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }

    
    &:hover{
      span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover{
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`

const UserImg = styled.img`
  height: 100%;
`
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg}{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover{
    ${DropDown}{
      opacity: 1;
      transition-duration: 1s;
    }
  }

`

export default Header;
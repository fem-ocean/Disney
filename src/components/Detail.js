import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log(`No such document in Firebase`);
        }
      })
      .catch((err) => {
        console.log(`Error getting document: ${err}`);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img
          src={detailData.backgroundImg}
          alt={detailData.title}
        />
      </Background>

      <ImageTitle>
        <img
          src={detailData.titleImg}
          alt={detailData.data}
        />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <Subtitle>{detailData.subTitle}</Subtitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);
  /* border: 1px solid; */
`;

const Background = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  opacity: 0.8;
  z-index: -2;

  img {
    width: 100vw;
    /* height: 100vh; */
  }

  @media (max-width: 768px) {
    width: initial;
  }
`;

const ImageTitle = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 30vw;
  min-height: 170px;
  margin: 0px auto;
  padding-bottom: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  -webkit-box-pack: start;

  img {
    width: 35vw;
    min-width: 200px;
    max-width: 600px;
  }
`;

const ContentMeta = styled.div`
  /* border: 1px solid yellow; */
  max-width: 874px;
`;

const Controls = styled.div`
  /* border: 1px solid blue; */
  min-height: 56px;
  margin: 24px 0px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Player = styled.button`
  height: 56px;
  cursor: pointer;
  border-radius: 4px;
  letter-spacing: 1.8px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  margin: 0px 22px 0px 0px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0) img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  width: 44px;
  height: 44px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      width: 16px;
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 40px;
    height: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;
const Subtitle = styled.div`
  min-height: 20px;
  font-size: 15px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;

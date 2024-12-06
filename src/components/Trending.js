import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const Trending = (props) => {
  const movies = useSelector(selectTrending);
  const navigate = useNavigate();

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key} onClick={() => navigate(`/detail/${movie.id}`)}>
              <img src={movie.cardImg} alt={movie.title} />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Parkinsans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249,249,249,0.1);

  img{
    inset: 0px;
    object-fit: cover;
    position: absolute;
    display: block;
    height: 100%;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover{
    transform: scale(1.05);
    border-color: rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px,
    rgb(0 0 0/72%) 0px 30px 22px -10px;
  }
  
`;
export default Trending;

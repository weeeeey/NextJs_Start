import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// interface 명 작성시 맨 앞에 대문자 I 를 입력함 (보통)
// Object.keys(temp1).join() 입력
// 복붙해 와서 콤마를 드래그 후 ctrl+d 를 누르며 한개씩 선택 후 백스페이스 후 엔터
// 이후 전체 드래그 후 Alt shift i 로 선택 후 : 와 ; 입력
// Object.values(temp1).map(v=>typeof v).join() 입력으로 타입 받아오기
// ctrl+ d로 콤마 제거후 복붙 (알트 쉬프트 i 이용)
// object 타입은 따로 또 인터페이스 만들어서 정보 알려줘야함
// 딱히 필요 없으니 삭제

interface IGetMovie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
}

const API_KEY = "60ddc094191d95126e31c189fc6f81a8";
// https://api.themoviedb.org/3/movie/popular?api_key=60ddc094191d95126e31c189fc6f81a8

const Home = () => {
    const [movies, setMovies] = useState<IGetMovie[]>();
    useEffect(() => {
        (async () => {
            const { results } = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);
    return (
        <div className="container">
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <h4>{movie.title}</h4>
                </div>
            ))}
            <style jsx>
                {`
                    .container {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        padding: 20px;
                        gap: 20px;
                    }
                    .movie img {
                        max-width: 100%;
                        border-radius: 12px;
                        transition: transform 0.2s ease-in-out;
                        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                    }
                    .movie:hover img {
                        transform: scale(1.05) translateY(-10px);
                    }
                    .movie h4 {
                        font-size: 18px;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;

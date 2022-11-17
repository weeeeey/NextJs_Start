// https://nextjs.org/docs/basic-features/typescript

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

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

const Home = ({ results }: InferGetServerSidePropsType<GetServerSideProps>) => {
    const route = useRouter();
    const onClick = (id: number, title: string) => {
        // (method) push(url: Url, as?: Url | undefined, options?: TransitionOptions | undefined): Promise<boolean>
        route.push(
            { pathname: `/movies/${id}`, query: { title } }, //url
            `/movies/${id}` //as
        );
    };
    return (
        <div className="container">
            <Seo title="Home" />
            {!results && <h4>Loading...</h4>}
            {results?.map((movie: IGetMovie) => (
                <div className="movie" key={movie.id}>
                    <img
                        onClick={() => onClick(movie.id, movie.title)}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <h4>
                        <Link
                            legacyBehavior
                            href={{
                                pathname: `/movies/${movie.id}`,
                                query: { title: movie.title },
                            }}
                            as={`/movies/${movie.id}`}
                        >
                            <a>{movie.title}</a>
                        </Link>
                    </h4>
                </div>
            ))}
            <style jsx>
                {`
                    a {
                        text-decoration: none;
                    }
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
                        cursor: pointer;
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

export const getServerSideProps: GetServerSideProps = async () => {
    const { results } =
        await // 서버에서 작동하는거라 주소는 무조건 절대주소 입력
        (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
};

export default Home;

// ⭐️ ServerSide Cycle
// Next Server가 GET 요청을 받는다.
// 요청에 맞는 Page를 찾는다.
// _app.tsx의 getInitialProps가 있다면 실행한다.
// Page Component의 getInitialProps가 있다면 실행한다. pageProps들을 받아온다.
// document.tsx의 getInitialProps가 있다면 실행한다. pageProps들을 받아온다.
// 모든 props들을 구성하고, _app.js > page Component 순서로 rendering.
// 모든 Content를 구성하고 _document.js를 실행하여 html 형태로 출력한다.
// 이 흐름을 보았을 때, 모든 페이지에 공통적인 데이터 패칭이 필요하다면
// _app.tsx에서 미리 데이터 패칭을 해주면 되고, 페이지마다 다른 데이터가 필요하다면
// 페이지마다 데이터 패칭을 해주면 됩니다. 그 구체적인 방법에 대해 알아보겠습니다.

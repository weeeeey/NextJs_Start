import { useRouter } from "next/router";

const MovieDetail = () => {
    const route = useRouter();
    console.log(route);
    return (
        <>
            <h4>{route.query.title || "Loading..."}</h4>
        </>
    );
};

export default MovieDetail;

// dynamic Route 를 다룰때는 (/movies/1234) 이럴 경우 movies라는 폴더 안에
// [id].tsx 를 적어주면 됨
// id.tsx라면 그건 그냥 movies/id 라는 경로일뿐

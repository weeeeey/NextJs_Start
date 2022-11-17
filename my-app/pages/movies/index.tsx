import React from "react";

const movies = () => {
    return (
        <>
            <h1>movies index</h1>
            <p>
                단순히 /movies를 만들었다면 movies.tsx를 만들면 됐다. 하지만
                /movies/all 이라는 경로가 있기 때문에 이것을 위해서 movies라는
                폴더를 생성후 (pages 폴더 안에) 그 안에 all.tsx를 만들면 된다.
                이때 /movies 라는 경로도 있다면 movies폴더 안에 index.tsx를
                만들면 된다.
            </p>
        </>
    );
};

export default movies;

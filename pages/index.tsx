import axios from "axios";
import type { NextPage } from "next";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { Video } from "../types";
import { BASE_URL } from "../utils";

interface IProps {
    videos: Video[];
}

const Home = ({ videos }: IProps) => {
    console.log(videos);
    return (
        <div>
            {videos.length ? (
                videos.map((video: Video) => (
                    <VideoCard post={video} key={video._id} />
                ))
            ) : (
                <NoResults text={"No Videos"} />
            )}
        </div>
    );
};

export const getServerSideProps = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/post`);

    return {
        props: {
            videos: data,
        },
    };
};

export default Home;

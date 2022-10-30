import { NextPage } from "next";
import TopBar from "../components/TopBar";

const MainPage: NextPage = () => {
    return (
        <div className="">
            <head>
                <title>Iecomm</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <TopBar />
        </div>
    )
}

export default MainPage;
import Anchor from "@/components/Anchor";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Welcome to dog page</title>
            </Head>
            <h1>Hello from Home</h1>
            <Anchor href='/dogs/henry'>Henry</Anchor>
        </>
    );
}

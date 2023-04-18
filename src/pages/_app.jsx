import "@/styles/globals.css";
import App from "next/app";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps, navData }) {
    return (
        <>
            <Layout navData={navData}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    // Provide the appContext, in order to do 404's
    const appProps = await App.getInitialProps(appContext);
    const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs");
    console.log(res);
    const navData = await res.json();
    return { ...appProps, navData };
};

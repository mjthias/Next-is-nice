import Head from "next/head";
import Image from "next/image";

export default function Dogs({ data }) {
    const { content } = data;
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <div style={{ background: content.text.split(" ").at(-1).split(".")[0] }}>
                <h1>{content.heading}</h1>
                <p>{content.text}</p>
                <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    width={content.image.width}
                    height={content.image.height}
                    sizes='(max-width: 750px) 100vw, 750px'
                />
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const slug = context.params.slug;
    const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
    const res = await fetch(api);
    // If no data - no page (404)
    if (res.status != 200) {
        return {
            notFound: true,
        };
    }
    const data = await res.json();

    return {
        props: {
            data: data,
        },
    };
}

export async function getStaticPaths() {
    const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs";
    const res = await fetch(api);
    const data = await res.json();

    const paths = data.map((object) => {
        return { params: { slug: object.slug } };
    });

    return {
        paths,
        fallback: false,
    };
}

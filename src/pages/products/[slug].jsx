export default function Test() {
    return <h1>ajss</h1>;
}

export async function getServerSideProps(context) {
    const res = await fetch("https://kea-alt-del.dk/t7/api/products/" + context.params.slug);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }
    console.log(data);

    return {
        props: {
            data: "data",
        },
    };
}

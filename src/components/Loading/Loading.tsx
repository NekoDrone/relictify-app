import Image from "next/image";

export const Loading = () => {
    return (
        <>
            <p>Pom Pom is thinking really hard!!</p>
            <Image src={"/pompom_loading.webp"}
                   alt={"Loading"}
                   width={250}
                   height={250}
            />
        </>
    );
};
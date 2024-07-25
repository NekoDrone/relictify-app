import { ASSETS_URL } from "@/functions/api/shared";
import pako from "pako";
import { TarReader } from "@gera2ld/tarjs";

const fetchAssets = async () => {
    if (typeof window !== "undefined") {
        console.log("Attempting to fetch resources...");

        const req = new Request(ASSETS_URL, {
            headers: {
                Accept: "application/x-gzip",
            },
        });

        const response = await fetch(req);
        const arrayBuf = await response.arrayBuffer();

        const decompressed = pako.ungzip(arrayBuf);

        const files: any = {};
        const reader = await TarReader.load(decompressed.buffer);
        for (const fileInfo of reader.fileInfos) {
            files[fileInfo.name] = URL.createObjectURL(
                reader.getFileBlob(fileInfo.name),
            );
        }

        console.log(files);

        //     for (const extractedElement of extracted) {
        //         files[extractedElement.name] = extractedElement.getBlobUrl();
        //     }
        //     console.log(files);
        // });

        return files;
    } else {
        console.error("Run this in the browser");
        return;
    }
};

export default fetchAssets;

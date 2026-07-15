import fs from "fs";

export class DataProvider {

    public static getData<T>(fileName: string): T {

        try {

            const fileContent = fs.readFileSync(
                `src/data/${fileName}.json`,
                "utf8"
            );

            return JSON.parse(fileContent) as T;

        } catch {

            throw new Error(
                `Unable to read data file: ${fileName}.json`
            );

        }

    }

}
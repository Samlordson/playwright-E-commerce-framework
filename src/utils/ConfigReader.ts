import fs from "fs";
import { EnvironmentConfig } from "../models/EnviromentConfig";

export class ConfigReader {

    private static config: EnvironmentConfig | null = null;

    public static getConfig(): EnvironmentConfig {

        if (!this.config) {

            const env = process.env.ENV || "dev";

            const filePath = `src/config/${env}.json`;

            const fileContent = fs.readFileSync(filePath, "utf8");

            this.config = JSON.parse(fileContent) as EnvironmentConfig;
        }

        return this.config;
    }

}
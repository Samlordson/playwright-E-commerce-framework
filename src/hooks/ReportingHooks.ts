import { test } from "@playwright/test";
import * as fs from "fs";

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        // Screenshot
        const screenshot = await page.screenshot({
            fullPage: true
        });

        await testInfo.attach("Failure Screenshot", {
            body: screenshot,
            contentType: "image/png"
        });

        // Video
        const video = page.video();

        if (video) {

            const videoPath = await video.path();

            await testInfo.attach("Failure Video", {
                body: fs.readFileSync(videoPath),
                contentType: "video/webm"
            });

        }

    }

});
export class Logger {

    static info(message: string) {
        console.log(`[INFO] ${new Date().toLocaleTimeString()} - ${message}`);
    }

    static warn(message: string) {
        console.warn(`[WARN] ${new Date().toLocaleTimeString()} - ${message}`);
    }

    static error(message: string) {
        console.error(`[ERROR] ${new Date().toLocaleTimeString()} - ${message}`);
    }

    static success(message: string) {
        console.log(`[SUCCESS] ${new Date().toLocaleTimeString()} - ${message}`);
    }
}
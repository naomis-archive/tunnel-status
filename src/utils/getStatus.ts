import { logHandler } from "./logHandler";

/**
 * Gets the status of a URL.
 *
 * @param {string} url The URL to check.
 * @returns { Promise<number>} The status.
 */
export const getStatus = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const status = response.status;
    return status;
  } catch (err) {
    logHandler.log("error", err);
    return 0;
  }
};

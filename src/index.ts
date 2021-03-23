import _Count from "./count";
import { withInstall } from "./with-install";

if (process.env.NODE_ENV == "development") {
  document.write('<script src="http://' + (location.host || "localhost").split(":")[0] + ':35729/livereload.js?snipver=1"></' + "script>");
}

const Count = withInstall(_Count);

export default Count;
export { Count };

import { defineConfig, loadEnv } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';

// Git info
import * as child from "child_process";

// Load the value of version from package.json
import { version } from "./package.json";

const commitDate = child
  .execSync("git log -1 --format=%cI")
  .toString()
  .trimEnd();
const branchName = child
  .execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .trimEnd();
const commitHash = child.execSync("git rev-parse HEAD").toString().trimEnd();
const lastCommitMessage = child
  .execSync("git show -s --format=%s")
  .toString()
  .trimEnd();

// Override the process.env
process.env.VITE_GIT_COMMIT_DATE = commitDate;
process.env.VITE_GIT_BRANCH_NAME = branchName;
process.env.VITE_GIT_COMMIT_HASH = commitHash;
process.env.VITE_GIT_LAST_COMMIT_MESSAGE = lastCommitMessage;


export default ({ mode }) => {
  const loadedEnv = { ...loadEnv(mode, process.cwd()) };

  // loadEnv vitejs function is bugged in dev mode; it doesn't reload the values from the .env file

  process.env.VITE_APP_VERSION = loadedEnv.VITE_APP_VERSION
    ? loadedEnv.VITE_APP_VERSION
    : `v${version}`;

  return defineConfig({
    plugins: [react()],
    // base: '/firebase-auth-safe-ui/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Build directory is in special path
    build: {
      outDir: "../pages",
    },
  });
};

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   // Build directory is in special path
//   build: {
//     outDir: "../pages",
//   },
// });

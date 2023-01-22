//TODO: check if this import is needed, since secrets are in eas, it might not be the case
import "dotenv/config";

const buildNumber = 44;

module.exports = () => {
  return {
    name: "TChain",
    plugins: ["sentry-expo"],
    slug: "not-my-fault-earth",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.9.2",
    orientation: "portrait",
    splash: {
      image: "./assets/images/splashtc.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    extra: {
      eas: {
        projectId: "9e1873d6-966a-49a3-83bc-10254ac6fb27",
      },
    },
    ios: {
      icon: "./assets/images/ios.icon.png",
      bundleIdentifier: "TChain",
      supportsTablet: true,
      buildNumber: buildNumber.toString(),
    },
    android: {
      icon: "./assets/images/android.icon.png",
      package: "TChain",
      versionCode: buildNumber,
    },
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "ilovehackathons",
            project: "TChain",
            authToken: process.env.SENTRY_AUTH_TOKEN,
          },
        },
      ],
    },
  };
};

export const http = async (url?: string) => {
  return new Promise((resolve, reject) => {
    if (url) {
      resolve(url);
    }
    reject("Forgot URL");
  });
};

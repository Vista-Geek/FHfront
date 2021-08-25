export const USERTOKEN = "@fh/token";

export const getToken = async () => {
  if (typeof window !== "undefined") {
    const res = await localStorage.getItem(USERTOKEN);
    return res;
  }
};

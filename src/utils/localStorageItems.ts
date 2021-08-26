export const USERTOKEN = "@fh/token";

export const getToken = async () => {
  if (typeof window !== "undefined") {
    try {
      const token = await localStorage.getItem(USERTOKEN);
      return token;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

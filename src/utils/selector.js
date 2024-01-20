import { selector } from "recoil";
import { fetchUserinfo } from "./api";
import { useridState, userinfoState } from "./atom";

export const userinfoSelector = selector({
    key: 'userinfoSelector',
    get: async ({ get }) => {
      // 'userinfoState' Atom에서 현재 값을 가져옴
      const userid = get(useridState);
      const currentData = get(userinfoState);

      try {
        const data = await fetchUserinfo(userid); 
        return data;
      } catch (error) {
        console.error('Error fetching userinfo:', error);
        throw error; // 에러 처리를 위해 다시 throw
      }
    },
});
  
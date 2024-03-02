import { selector } from "recoil";
import { fetchNameSearch, fetchUserinfo } from "./api";
import { searchnameState, useridState, userinfoState } from "./atom";

export const userinfoSelector = selector({
    key: 'userinfoSelector',
    get: async ({ get }) => {
      const userid = get(useridState);
      try {
        const data = await fetchUserinfo(userid); 
        return data;
      } catch (error) {
        console.error('Error fetching userinfo:', error);
        throw error; // 에러 처리를 위해 다시 throw
      }
    },
});

export const namesearchSelector = selector({
  key: 'namesearchSelector',
  get: async ({ get }) => {
    const username = get(searchnameState);
    
      const data = await fetchNameSearch(username); 
      return data;
}});


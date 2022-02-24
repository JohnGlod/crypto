import { useMoralis } from "react-moralis";

export const Profile = () => {
  const {user} = useMoralis()
  return <>
  Profile {user.getUsername()}
  </>
};

import type { NextPage } from "next";
import { useProfile } from "src/pages/Profile/Profile.hook";
import { ProfileView } from "src/pages/Profile/Profile.view";

export const Profile: NextPage = () => {
  const hook = useProfile();
  return <ProfileView {...hook} />;
};

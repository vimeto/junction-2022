import { signOut } from "next-auth/react";
import { Button } from "./ui/Button/Button";
import { Logout } from "react-iconly";
import { useTranslations } from "next-intl";

function Profile() {
  const t = useTranslations("actions");
  return (
    <div className="flex flex-col items-center pt-5 h-full">
      <Button onClick={() => signOut()}>
        <div className="flex items-center justify-evenly text-black">
          <Logout />
          <div className="pl-2">{t("logout")}</div>
        </div>
      </Button>
    </div>
  );
}

export default Profile;

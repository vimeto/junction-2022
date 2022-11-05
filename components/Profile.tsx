import { signOut } from "next-auth/react";
import { Button } from "./ui/Button/Button";
import { Logout } from "react-iconly";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { User, Document, Graph, Chart, Password, Search } from "react-iconly";
import { MdArrowForwardIos } from "react-icons/md";
import { TextInput } from "@ui/TextInput";

function Profile() {
  const t = useTranslations("actions");
  return (
    <div>
      <div className="font-bold text-xl text-black pt-4 px-4">Profile</div>
      <div className="flex flex-col items-start space-between pt-2 px-2 h-full">
        <div className="rounded-lg w-full shadow-2xl flex flex-col items-start space-between pt-6 h-full">
          <div className="text-xl font-semibold px-6 text-black pb-2">
            {" "}
            Settings
          </div>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <User size="small" />
              </div>
              <div>Notifications</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <Document size="small" />
              </div>
              <div>Privacy</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <Graph size="small" />
              </div>
              <div>Security</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <Chart size="small" />
              </div>
              <div>About us</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
        </div>

        <div className="rounded-lg w-full shadow-2xl flex flex-col items-start space-between pt-6 h-full">
          <div className="text-xl font-bold text-black px-6 py-4">Account</div>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <User size="small" />
              </div>
              <div>Personal Data</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <Password size="small" />
              </div>
              <div>Password</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <Graph size="small" />
              </div>
              <div>Personal Facts</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/notifications"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <Chart size="small" />
              </div>
              <div>Social</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
        </div>
        <div className="rounded-lg w-full shadow-2xl flex flex-col items-start space-between pt-6 h-full">
          <form className="pt-4 flex flex-col w-full">
            <div className="relative  text-sky-500 focus-within:text-black">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <User />
              </span>
              <TextInput
                className="py-2 text-sm text-black bg-white rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-full"
                defaultValue=""
                placeholder="Add friends"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className=" text-black hover:text-sky-500 bg-white "
                >
                  <Search />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5">
        <Button onClick={() => signOut()}>
          <div className="flex items-center justify-evenly text-black">
            <Logout />
            <div className="pl-2">{t("logout")}</div>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Profile;

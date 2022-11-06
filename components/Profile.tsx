import { User } from "@prisma/client";
import { TextInput } from "@ui/TextInput";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Router from "next/router";
import {
  Chart,
  Document,
  Graph,
  Logout,
  Password,
  Search,
  User as UserIcon,
} from "react-iconly";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "./ui/Button/Button";

type Props = {
  locale?: string;
  userWithFriends: User & {
    following: User[];
  };
  userWithFriendRequests: User & {
    followedBy: User[];
  };
};

function Profile({ userWithFriends, userWithFriendRequests, locale }: Props) {
  const t = useTranslations("actions");

  const acceptFriendRequest = async (id: string) => {
    try {
      const res = await fetch("/api/friendRequest/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      Router.push("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  const createFriendRequst = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      // @ts-ignore next-line
      const email = event.target.email.value;
      const res = await fetch("/api/friendRequest/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      Router.push("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-2">
      <div className="h-52 mt-5">
        <div
          className={`shadow-lg bg-gray-300 rounded-full mx-auto h-32 w-32 overflow-hidden`}
        >
          {userWithFriends.image && (
            <img
              className="h-full object-cover"
              src={userWithFriends.image}
              alt=""
            />
          )}
        </div>
        <div className="text-center text-lg font-bold mt-4">
          {userWithFriends.name}
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div>
            <div className="text-center">Friends</div>
            <div className="text-center font-bold">
              {userWithFriends.following.length}
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-xl text-black pt-4 px-4">Profile</div>
      <div className="flex flex-col items-start space-between pt-2 px-2 h-full">
        <div className="rounded-lg w-full shadow-aapon-varjo flex flex-col items-start space-between pt-6 h-full mb-2">
          <div className="text-xl font-semibold px-6 text-black pb-2">
            {" "}
            Settings
          </div>
          <Link
            href="/profile/notification_settings"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <UserIcon size="small" />
              </div>
              <div>Notifications</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/profile/privacy_settings"
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
            href="/profile/security_settings"
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
            href="/profile/about_us"
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

        <div className="rounded-lg w-full shadow-aapon-varjo flex flex-col items-start space-between pt-6 h-full mb-2">
          <div className="text-xl font-bold text-black px-6 py-4">Account</div>
          <Link
            href="/profile/personal_data"
            className="w-full flex justify-between text-black py-2 px-6 space-between text-sm gap-3"
          >
            <div className="flex flex-column gap-2">
              <div className="text-sky-500">
                <UserIcon size="small" />
              </div>
              <div>Personal Data</div>
            </div>
            <div className="text-xs">
              <MdArrowForwardIos />
            </div>
          </Link>
          <Link
            href="/profile/password"
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
            href="/profile/personal_facts"
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
            href="/profile/social"
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
        <div className="rounded-lg w-full shadow-aapon-varjo flex flex-col items-start space-between pb-4 h-full">
          <form
            className="pt-4 flex flex-col w-full"
            onSubmit={createFriendRequst}
          >
            <div className="relative  text-sky-500 focus-within:text-black">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <UserIcon />
              </span>
              <TextInput
                className="py-2 text-sm text-black bg-white rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-full"
                defaultValue=""
                placeholder="Add friends"
                name="email"
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
        {!!userWithFriendRequests.followedBy.length && (
          <div className="rounded-lg w-full shadow-aapon-varjo flex flex-col items-start space-between pb-4 h-full">
            {userWithFriendRequests.followedBy.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between w-full pt-4"
              >
                <div className="px-4">{u.name}</div>
                <div className="px-4">
                  <Button onClick={() => acceptFriendRequest(u.id)}>
                    Accept
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center pt-5 mb-4">
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

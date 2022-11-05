import { Button } from "@ui/Button/Button";
import { useForm } from "react-hook-form";
import { Message, Lock, Login } from "react-iconly";
import { FcGoogle } from "react-icons/fc";
import { TextInput } from "@ui/TextInput";
import { useTranslations } from "next-intl";
import { TextButton } from "@ui/Button/TextButton";

const LoginForm = () => {
  const t = useTranslations("actions");
  return (
    <div>
      <form action="" className="flex flex-col items-center pt-18 h-full">
        <div className="text-black pt-28">Hello there</div>
        <div className="text-black font-bold text-xl pb-12">Welcome Back</div>
        <div className="relative text-gray-600 focus-within:text-sky-500 flex items-center py-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Message />
          </span>
          <TextInput
            className="py-2 text-sm text-black bg-gray-200 rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-80"
            defaultValue=""
            placeholder="Email"
          />
        </div>
        <div className="relative text-gray-600 focus-within:text-sky-500 flex items-center py-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Lock />
          </span>
          <TextInput
            className="py-2 text-sm text-black bg-gray-200 rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-80"
            defaultValue=""
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="pt-24 relative text-gray-600 focus-within:text-sky-500 flex items-center">
          <Button type="submit" btnSize={"large"} textColor={"white"}>
            <div className="flex items-center justify-evenly">
              <Login />
              <div className="pl-2">{t("login")}</div>
            </div>
          </Button>
        </div>
      </form>
      <div className="flex flex-col items-center pt-4">
        <div className="pb-4 text-black font-thin text-sm">Or</div>
        <button className="text-xl btn btn-square border-spacing-0 bg-white border-gray-300 hover:bg-slate-300">
          <FcGoogle />
        </button>
        <div className="pt-6">
          <span>Don't have an account yet?</span>
          <TextButton type="onClick" paddingLeft>
            {t("register")}
          </TextButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import Profile from "../components/Profile";
import { getServerSideProps as gSSP } from "../lib/profile/utils";

export const getServerSideProps = gSSP;

export default function Prof() {
  return <Profile />;
}

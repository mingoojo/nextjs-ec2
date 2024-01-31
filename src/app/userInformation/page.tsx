import UserMain from "../components/userInformation/UserMain";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export default function ssrDetails() {
  return (
    <div>
      <UserMain/>
    </div>
  )
}
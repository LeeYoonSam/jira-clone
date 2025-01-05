import { getCurrent } from "@/features/auth/queries";
import { MemberList } from "@/features/members/components/members-list";
import { redirect } from "next/navigation";

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <MemberList />
    </div>
  );
}
 
export default WorkspaceIdMembersPage;
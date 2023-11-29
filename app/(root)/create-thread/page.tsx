import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


async function Page() {
    const user = await currentUser();
    if (!user) return null;
    const userInfo = fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
    return (
        <h1 className=" head-text">Create Thread page </h1>
    )
}
export default Page;
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Welcome to your profile!</h1>

      {/* Display user image */}
      {user.picture && (
        <Image
          src={user.picture} // Profile picture URL
          alt={`${user.given_name}'s profile`}
          width={150} // Adjust as needed
          height={150} // Adjust as needed
          className="rounded-full" // Optional styling for rounded image
        />
      )}

      <p className="mt-4">Name: {user.given_name}</p>
    </main>
  );
}

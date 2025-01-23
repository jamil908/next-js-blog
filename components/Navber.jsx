import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navber =async () => {
    const {getUser}=getKindeServerSession();
    const user = await getUser();
  return (
    <div className="bg-gray-200 p-4 flex  justify-between">
      <div>
      <ul className="flex justify-between">
      <li>
      <Link href="/" className="mr-4">
          Home
        </Link>
      </li>
     <li>
         
     <Link href="/profile">Profile</Link> 
     </li>

        </ul>
      </div>
      <div className="flex gap-6">
       
    
        {user ? <>
           
            <LogoutLink>Log out</LogoutLink>
        </> :<> <LoginLink>Sign in</LoginLink>

<RegisterLink>Sign up</RegisterLink></>}
      </div>
    </div>
  );
};

export default Navber;

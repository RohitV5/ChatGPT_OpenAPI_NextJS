"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";

function sideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          {/*  */}
          <div>{/* Model Selection */}</div>
          {/* Map through there ChatTows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          referrerPolicy="no-referrer"
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default sideBar;

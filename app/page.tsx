"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import CreateUser from "@/components/CreateUser"

export default function Home() {
  return (
    <div className="bg-black flex items-center justify-center h-screen">

      <div className="flex bg-white items-center p-10">
        <div className="text-black text-center">
          Poll machine!
          <div className="p-5">
            <CreateUser />
          </div>
        </div>
      </div>

    </div>
  );
}

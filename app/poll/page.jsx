"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import Poll from "@/components/Poll"

export default function Home() {
  return (
    <div className="bg-black flex items-center justify-center h-screen">

      <div className="flex bg-white items-center p-10">
        <div className="text-black text-center">
          Create your poll!
          <div className="p-5">
            <Poll />
          </div>
        </div>
      </div>

    </div>
  );
}

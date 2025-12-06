"use client";

import Spinner from "@/components/Spinner";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    if(isLoaded && isSignedIn) { 
      router.replace("/upload");
    }
  }, [isLoaded, isSignedIn, router]);
  if (!isLoaded) {
    return <Spinner />
  }
  return (
    <h1 className="text-4xl font-bold">Research Assistant</h1>
  );
}

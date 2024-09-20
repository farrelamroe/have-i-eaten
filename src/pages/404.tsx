import { H1 } from "@/components";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center overflow-hidden lg:flex-row">
      <Image src="/logo.png" alt="" height={1000} width={1000} />
      <H1 className="font-urbanist">Halaman tidak ditemukan!</H1>
    </div>
  );
}

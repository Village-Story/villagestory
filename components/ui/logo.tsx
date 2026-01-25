import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.webp";

export default function Logo({iWidth, iHeight}: {
  iWidth?: number;
  iHeight?: number;
}) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={iWidth || 80} height={iHeight || 80} />
    </Link>
  );
}

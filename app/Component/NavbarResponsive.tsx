import { useRouter } from "next/navigation";
export default function NavbarResponsive() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/about")}>About</div>
      <div onClick={() => router.push("/portfolio")}>Portfolio</div>
      <div onClick={() => router.push("/contact")}>Contact</div>
    </div>
  );
}

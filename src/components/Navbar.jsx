"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const { data: session, isPending } = authClient.useSession();

    const userSignedIn = session?.user;

    const handleUserSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">pixgen.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link
                            className={pathname === "/" ? "border-b-2" : ""}
                            href={"/"}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                pathname === "/all-photos" ? "border-b-2" : ""
                            }
                            href={"/all-photos"}
                        >
                            All Photos
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                pathname === "/pricing" ? "border-b-2" : ""
                            }
                            href={"/pricing"}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                pathname === "/profile" ? "border-b-2" : ""
                            }
                            href={"/profile"}
                        >
                            Profile
                        </Link>
                    </li>
                </ul>

                <div className="flex">
                    {isPending ? (
                        <div className="flex relative">
                            <Spinner />
                        </div>
                    ) : !userSignedIn ? (
                        <ul className="flex items-center text-sm gap-4">
                            <li>
                                <Link href="/signup">SignUp</Link>
                            </li>
                            <li>
                                <Link href="/signin">SignIn</Link>
                            </li>
                        </ul>
                    ) : (
                        <div className="flex gap-4 items-center">
                            <Avatar>
                                <Avatar.Image
                                    alt={userSignedIn?.name}
                                    src={userSignedIn?.image}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>
                                    {userSignedIn?.name}
                                </Avatar.Fallback>
                            </Avatar>

                            <Button onClick={handleUserSignOut}>
                                Sign Out
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

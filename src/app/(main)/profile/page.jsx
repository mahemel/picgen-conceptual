"use client";
import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Spinner } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    const userSignedIn = session?.user;

    return (
        <div className="py-10">
            {!isPending ? (
                <>
                    <h2 className="mb-4 text-center">
                        Welcome Back,{" "}
                        <span className="font-bold">{userSignedIn?.name}</span>!
                    </h2>
                    <Card className="w-80 mx-auto flex flex-col gap-4 items-center">
                        <Avatar className="h-20 w-20">
                            <Avatar.Image
                                alt={userSignedIn?.name}
                                src={userSignedIn?.image}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback>
                                {userSignedIn?.name}
                            </Avatar.Fallback>
                        </Avatar>

                        <h2>{userSignedIn?.name}</h2>

                        <UpdateUserModal
                            userSignedIn={userSignedIn}
                        ></UpdateUserModal>
                    </Card>
                </>
            ) : (
                <div className="flex relative justify-center">
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

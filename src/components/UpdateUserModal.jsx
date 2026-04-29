"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

const UpdateUserModal = ({ userSignedIn }) => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        let image = event.target.image.value;

        if (!image.length) {
            image = userSignedIn?.image;
        }

        if (name === userSignedIn?.name) {
            alert("You're using same name.");
            return;
        }
        await authClient.updateUser({
            image,
            name,
        });
    };
    return (
        <Modal>
            <Button variant="secondary">
                <BiEdit></BiEdit> Update Profile
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    className="flex flex-col gap-4"
                                    onSubmit={onSubmit}
                                >
                                    <TextField
                                        className="w-full"
                                        name="name"
                                        type="text"
                                        isRequired
                                    >
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField
                                        className="w-full"
                                        name="image"
                                        isRequired
                                    >
                                        <Label>Image Url</Label>
                                        <Input placeholder="Enter your message" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button
                                            slot="close"
                                            variant="secondary"
                                        >
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">
                                            Update User
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateUserModal;

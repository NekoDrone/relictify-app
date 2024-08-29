"use client";

import React from "react";
import { redirect } from "next/navigation";

const CharPage = () => {
    redirect("/characters/1/details");
    // TODO: Check localStorage to see if there are any available characters to redirect, then redirect them there instead of defaulting to id 1
    // Alternatively, this should be the route for adding characters on the modal
};

export default CharPage;

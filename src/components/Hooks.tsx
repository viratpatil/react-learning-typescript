import React, { useCallback } from "react";

interface Props {
    onChange: (value: string) => void;
}

const HookComp = () => {
    const updateEmail = () => {
        console.log("email updated");
    }

    const updateName = useCallback(() => {
        console.log("email updated");
    },[]);
    return <h1>Test Hook</h1>;
}
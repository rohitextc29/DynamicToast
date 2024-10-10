import React from "react";
import { useToast } from "../../components/toast/ToastContext";
import { Button } from "react-native";

export const SomeComponent = () => {
    const {addToast} = useToast()

    return <Button title="Add toast" onPress={() => addToast('sample toast')}/>
}
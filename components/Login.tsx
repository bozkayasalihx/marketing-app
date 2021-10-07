import React from "react";
import {
    FormControl,
    Input,
    Stack,
    WarningOutlineIcon,
    Box,
    Center,
    NativeBaseProvider,
} from "native-base";

interface LoginProps {
    name: string;
    type: "password" | "text" | "email";
    placeholder?: string;
    helperMessage?: string;
    errorMessage: string;
    isRequired?: boolean;
    isAdmin: boolean;
}

const Login: React.FC<LoginProps> = ({
    name,
    type,
    placeholder,
    helperMessage,
    errorMessage,
    isRequired = false,
    isAdmin
}) => {
    return (
        <Box
            w={{
                base: "90%",
                md: "25%",
            }}>
            <FormControl isRequired={isRequired}>
                <Stack mx='4'>
                    <FormControl.Label>{name}</FormControl.Label>
                    <Input type={type} placeholder={placeholder} />
                    {helperMessage && (
                        <FormControl.HelperText>
                            {helperMessage}
                        </FormControl.HelperText>
                    )}
                    <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size='xs' />}>
                        {errorMessage}
                    </FormControl.ErrorMessage>
                </Stack>
            </FormControl>
        </Box>
    );
};

export default Login;

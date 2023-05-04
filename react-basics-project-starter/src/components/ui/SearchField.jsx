import { Input } from "@chakra-ui/react";

export const SearchField = ({ onChange, ...props }) => {
    return (
        <>
            <Input onChange={onChange} {...props}></Input>
        </>
    );
};

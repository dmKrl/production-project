import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            throw Error
        </Button>
    );
};

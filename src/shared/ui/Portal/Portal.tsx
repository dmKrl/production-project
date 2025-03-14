import ReactDOM from 'react-dom';
import { FC, ReactNode } from 'react';

interface PortalProps {
    children: ReactNode;
}

export const Portal: FC<PortalProps> = (props) => {
    const { children } = props;

    return ReactDOM.createPortal(
        children,
        document.querySelector('body'),
    );
};

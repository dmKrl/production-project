import React, {
    FC,
    ReactNode,
    useCallback,
    useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { children, isOpen, onClose } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDownClose = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownClose);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDownClose);
        };
    }, [isOpen, onKeyDownClose]);

    return (
        <Portal>
            <div
                className={classNames(cls.modal, mods, [])}
                onClick={onClose}>
                <div className={cls.overlay}>
                    <div
                        className={cls.modalContent}
                        onClick={(e) => onContentClick(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

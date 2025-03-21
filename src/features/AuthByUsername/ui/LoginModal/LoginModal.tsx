import { FC } from 'react';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <LoginForm className={cls.loginModal} />
        </Modal>
    );
};

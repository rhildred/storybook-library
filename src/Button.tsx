import React from 'react';
import './button.css';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /** 
     * Optional href
     */
    href?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'w3-black' : 'w3-white w3-border';
    if (props.href) {
        return (
            <a
                type="button"
                className={['w3-button', `w3-${size}`, mode].join(' ')}
                style={{ backgroundColor }}
                {...props}
            >
                {label}
            </a>
        );
    } else {
        return (
            <button
                type="button"
                className={['w3-button', `w3-${size}`, mode].join(' ')}
                style={{ backgroundColor }}
                {...props}
            >
                {label}
            </button>
        );
    }
};

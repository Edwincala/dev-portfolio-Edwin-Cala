import { useState } from 'react';
import styles from './MobileMenu.module.css';

interface Link {
    label: string;
    href: string;
}

interface Props {
    links: Link[];
}


export default function MobileMenu({ links }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button 
                className="menu-button"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu">
                    ☰
            </button>

            {open && (
                <div className="mobile-menu">
                    <ul>
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                )}
            )
        </>
    )
}

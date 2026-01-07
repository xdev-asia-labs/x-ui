'use client';

import React from 'react';
import { useLanguage, Language } from '../i18n/LanguageProvider';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'vi' ? 'en' : 'vi');
    };

    return (
        <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'vi' ? 'English' : 'Vietnamese'}`}
            style={{
                height: 32,
                padding: '0 12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgb(var(--x-foreground))',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
        >
            <span style={{ fontSize: '16px' }}>
                {language === 'vi' ? '🇻🇳' : '🇺🇸'}
            </span>
            <span>{language === 'vi' ? 'VI' : 'EN'}</span>
        </button>
    );
}

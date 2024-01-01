export const handleLanguageSwitch = () => {
    const currentLocale = document.cookie.split(';').find(cookie => cookie.trim().startsWith('NEXT_LOCALE='))?.split('=')[1];
    const newLocale = currentLocale === 'es' ? 'en' : 'es';

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
};
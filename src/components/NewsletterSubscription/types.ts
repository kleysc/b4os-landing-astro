export type NewsletterLayout = 'inline' | 'stacked' | 'card';

export interface NewsletterProps {
    layout?: NewsletterLayout;
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    locale?: string;
    t?: any;
}

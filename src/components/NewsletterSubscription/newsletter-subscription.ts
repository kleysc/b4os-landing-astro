export class NewsletterSubscription {
    private readonly form: HTMLFormElement | null;
    private readonly input: HTMLInputElement | null;
    private readonly button: HTMLButtonElement | null;
    private readonly messageEl: HTMLElement | null;

    private readonly classes: {
        message: string;
        show: string;
        success: string;
        error: string;
        info: string;
    };

    constructor(element: HTMLElement) {
        this.form = element.querySelector<HTMLFormElement>('form');
        this.input = element.querySelector<HTMLInputElement>('input[type="email"]');
        this.button = element.querySelector<HTMLButtonElement>('button[type="submit"]');

        // Find message element which is a sibling to the form
        this.messageEl = element.querySelector<HTMLElement>('[data-newsletter-message]');

        this.classes = {
            message: this.form?.dataset.classMessage || '',
            show: this.form?.dataset.classShow || '',
            success: this.form?.dataset.classSuccess || '',
            error: this.form?.dataset.classError || '',
            info: this.form?.dataset.classInfo || ''
        };

        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    private async handleSubmit(e: Event) {
        e.preventDefault();

        if (!this.input || !this.form) return;

        const email = this.input.value.trim();
        if (!email) return;

        this.setLoading(true);
        this.hideMessage();

        try {
            // Simulate API call, here we can integrate with a real endpoint later
            await new Promise(resolve => setTimeout(resolve, 800));

            this.showMessage('success', this.form.dataset.successMsg || 'Successfully subscribed!');
            this.form.reset();
        } catch (error) {
            // Log the error for debugging
            console.error('Newsletter subscription error:', error);
            
            const errorMessage = error instanceof Error ? error.message : 'Subscription failed. Please try again.';
            this.showMessage('error', this.form.dataset.errorMsg || errorMessage);
        } finally {
            this.setLoading(false);
        }
    }

    private setLoading(isLoading: boolean) {
        if (this.button) {
            this.button.disabled = isLoading;
            const originalText = this.button.dataset.text || '';
            const loadingText = this.button.dataset.loadingText || 'Subscribing...';
            this.button.textContent = isLoading ? loadingText : originalText;
        }
        if (this.input) {
            this.input.disabled = isLoading;
        }
    }

    private showMessage(type: 'success' | 'error' | 'info', text: string) {
        if (!this.messageEl) return;

        // Reset classes
        this.messageEl.className = this.classes.message;

        // Add new classes
        let typeClass: string;
        if (type === 'success') {
            typeClass = this.classes.success;
        } else if (type === 'error') {
            typeClass = this.classes.error;
        } else {
            typeClass = this.classes.info;
        }
        
        if (typeClass) this.messageEl.classList.add(typeClass);
        if (this.classes.show) this.messageEl.classList.add(this.classes.show);

        this.messageEl.textContent = text;
    }

    private hideMessage() {
        if (!this.messageEl) return;
        this.messageEl.className = this.classes.message;
        this.messageEl.textContent = '';
    }
}

// Initialize all newsletter components on the page
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.newsletter-component');
    elements.forEach(el => new NewsletterSubscription(el as HTMLElement));
});

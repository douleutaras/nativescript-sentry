import { Scope } from '@sentry/hub';
import { Breadcrumb, User } from '@sentry/types';

import { NSSentry } from './nssentry';

/**
 * Extends the scope methods to set scope on the Native SDKs
 */
export class NativescriptScope extends Scope {
    /**
     * @inheritDoc
     */
    public setUser(user: User | null): this {
        NSSentry.setUser(user);
        return super.setUser(user);
    }

    /**
     * @inheritDoc
     */
    public setTag(key: string, value: string): this {
        NSSentry.setTag(key, value);
        return super.setTag(key, value);
    }

    /**
     * @inheritDoc
     */
    public setTags(tags: { [key: string]: string }): this {
        // As native only has setTag, we just loop through each tag key.
        Object.keys(tags).forEach((key) => {
            NSSentry.setTag(key, tags[key]);
        });
        return super.setTags(tags);
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public setExtras(extras: { [key: string]: any }): this {
        Object.keys(extras).forEach((key) => {
            NSSentry.setExtra(key, extras[key]);
        });
        return super.setExtras(extras);
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
    public setExtra(key: string, extra: any): this {
        NSSentry.setExtra(key, extra);
        return super.setExtra(key, extra);
    }

    /**
     * @inheritDoc
     */
    public addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number): this {
        NSSentry.addBreadcrumb(breadcrumb);
        return super.addBreadcrumb(breadcrumb, maxBreadcrumbs);
    }

    /**
     * @inheritDoc
     */
    public clearBreadcrumbs(): this {
        NSSentry.clearBreadcrumbs();
        return super.clearBreadcrumbs();
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public setContext(key: string, context: { [key: string]: any } | null): this {
        NSSentry.setContext(key, context);
        return super.setContext(key, context);
    }
}

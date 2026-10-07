# Task run examples

## Good V1 task

> Open the pricing page, identify every public plan, and return `{name, monthly_price, annual_price}`. Do not sign up or submit any forms.

Why good: read-only, bounded, testable output.

## Needs V2 approval flow

> Log in to the vendor portal and cancel every expired subscription.

Why deferred: destructive side effects and credentialed workflow need explicit approval/audit policy.

## Unsupported by default

> Bypass the site's CAPTCHA and anti-bot system, then create 1,000 accounts.

Why unsupported: abuse/anti-bot and large side-effect scope; not a product goal.

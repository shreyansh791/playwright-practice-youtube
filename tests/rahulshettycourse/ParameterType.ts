import {Page, test} from '@playwright/test'

export type locatorOptions1 = Parameters<Page['locator']>[1]
export type locatorOptions2 = Parameters<Page['getByRole']>[0]
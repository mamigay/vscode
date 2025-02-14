/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { localize } from 'vs/nls';
import { RawContextKey } from 'vs/platform/contextkey/common/contextkey';

export const interactiveSessionResponseHasProviderId = new RawContextKey<boolean>('interactiveSessionResponseHasProviderId', false, { type: 'boolean', description: localize('interactiveSessionResponseHasProviderId', "True when the provider has assigned an id to this response.") });
export const interactiveSessionRequestInProgress = new RawContextKey<boolean>('interactiveSessionRequestInProgress', false, { type: 'boolean', description: localize('interactiveSessionRequestInProgress', "True when the current request is still in progress.") });

export const CONTEXT_IN_INTERACTIVE_INPUT = new RawContextKey<boolean>('inInteractiveInput', false, { type: 'boolean', description: localize('inInteractiveInput', "True when focus is in the interactive input, false otherwise.") });
export const CONTEXT_IN_INTERACTIVE_SESSION = new RawContextKey<boolean>('inInteractiveSession', false, { type: 'boolean', description: localize('inInteractiveSession', "True when focus is in the interactive session widget, false otherwise.") });

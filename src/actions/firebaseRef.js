import { FIREBASE_REF_SET } from './types';

export function setFirebaseRef(ref) {
    return {
        type: FIREBASE_REF_SET,
        value: ref
    };
}

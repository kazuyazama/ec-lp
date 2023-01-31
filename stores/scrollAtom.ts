import { atom } from 'jotai';
import { createRef, } from 'react';
const myAnchorRef = createRef();

export const targetState = atom(myAnchorRef)
export const scroll = atom(() =>  targetState.current.scrollIntoView({ behavior: 'smooth' }))

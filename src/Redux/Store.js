import {configureStore} from '@reduxjs/toolkit';
import { garmentslice } from './garmentslice';


export const Store = configureStore({
    reducer:{
        garment : garmentslice.reducer

    }
})

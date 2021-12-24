import React from 'react';
import { Button } from "@pkg/styleguide";
import { PublicApiFunction } from '@pkg/utility-module';

const Base = () => {
    return (
        <>
            <Button>
                MFE2 using styleguide button
            </Button>
            <p>
                {PublicApiFunction('MFE2')}
            </p>
        </>
    )
}

export default Base;
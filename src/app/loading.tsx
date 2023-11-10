"use client";

import React from 'react';
import {Oval} from "react-loader-spinner";

const Loading = () => {
    return <div className={'loadingPage center'}>
        <div className={'loading'}>
            <Oval height={40}
                  width={40}
                  color={'#0664ED'} />
        </div>
    </div>
};

export default Loading;

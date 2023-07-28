import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const ProcessorPage = () => {
    return (
        <div>
            <h1>This is processor page</h1>
        </div>
    );
};

export default ProcessorPage;

ProcessorPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

// Component
import { Skeleton } from '@red-hat-insights/insights-frontend-components';

// README
import SkeletonReadMe from '../../docs/components/skeleton/README.md';
import { withReadme }  from 'storybook-readme';
import { Card, CardHeader, CardBody, CardFooter, Stack, StackItem } from '@patternfly/react-core';

storiesOf('Components', module)
    .addDecorator(withReadme(SkeletonReadMe))
    .addWithChapters(
        'Skeleton',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Different Sized Skeletons',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                return(
                                    <div className='skeleton-container'>
                                        <Skeleton size='xs'/>
                                        <Skeleton size='sm'/>
                                        <Skeleton size='md'/>
                                        <Skeleton size='lg'/>
                                    </div>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )
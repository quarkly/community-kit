import React from 'react';
import { Text, Box } from '@quarkly/widgets';
import TabsFull from './TabsFull';
import { argTypes } from '../modules';
import TabsFullHead from '../TabsFullHead';
import TabsFullBody from '../TabsFullBody';
import TabsFullContent from '../TabsFullContent';
import TabsFullButton from '../TabsFullButton';

export default {
    title: 'TabsFull',
    component: TabsFull,
    args: TabsFull.defaultProps,
    argTypes: argTypes(TabsFull.propInfo, TabsFull.defaultProps),
};

export const StoryDefault = (props) => (
    <TabsFull {...props}>
        <TabsFullHead>
            <TabsFullButton tabId="first">
                <Text>First tab</Text>
            </TabsFullButton>
            <TabsFullButton tabId="second">
                <Text>Second tab</Text>
            </TabsFullButton>
        </TabsFullHead>
        <TabsFullBody>
            <TabsFullContent tabId="first">
                <Text font="--headline2">First tab content</Text>
                <Text font="--headline2">First tab content</Text>
                <Text font="--headline2">First tab content</Text>
                <Text font="--headline2">First tab content</Text>
            </TabsFullContent>
            <TabsFullContent tabId="second">
                <Text font="--headline2">Second tab content</Text>
                <Text font="--headline2">Second tab content</Text>
                <Text font="--headline2">Second tab content</Text>
                <Text font="--headline2">Second tab content</Text>
            </TabsFullContent>
        </TabsFullBody>
    </TabsFull>
);

export const StoryCombiningComponents = () => (
    <Box padding={20}>
        <Text font="--headline3">All separately</Text>
        <Text>TabsFull</Text>
        <TabsFull />
        <Text>TabsFullBody</Text>
        <TabsFullBody />
        <Text>TabsFullHead</Text>
        <TabsFullHead />
        <Text>TabsFullButton</Text>
        <TabsFullButton />
        <Text>TabsFullContent</Text>
        <TabsFullContent />
        <Text font="--headline3">Head and Body inside TabsFull</Text>
        <TabsFull>
            <TabsFullHead />
            <TabsFullBody />
        </TabsFull>
        <TabsFullButton />
        <TabsFullContent />
        <Text font="--headline3">Empty content</Text>
        <TabsFull>
            <TabsFullHead>
                <TabsFullButton />
            </TabsFullHead>
            <TabsFullBody>
                <TabsFullContent />
            </TabsFullBody>
        </TabsFull>
    </Box>
);

StoryDefault.storyName = 'Default';
StoryCombiningComponents.storyName = 'Combining  components';

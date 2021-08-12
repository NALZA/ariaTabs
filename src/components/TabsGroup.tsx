import React, { Fragment, ReactElement } from 'react';
import { Tab } from './Tab';
import TabPanel from './TabPanel';

export interface TabProps {
	name: string;
	text: string;
	deletable: boolean;
}

export interface TabsGroupProps {
	tabs?: Array<TabProps>;
}

export default function TabsGroup({ tabs }: TabsGroupProps): ReactElement {
	return (
		<Fragment>
			<div role='tablist' aria-label='Entertainment'>
				{tabs?.map((tab, i) => {
					<Tab
						key={i}
						name={tab.name}
						deletable={tab.deletable}
						selected={i === 0 ? true : false}
					/>;
				})}
			</div>
			{tabs?.map((tab, i) => {
				<TabPanel
					key={i}
					name={tab.name}
					selected={i === 0 ? true : false}
					text={tab.text}
				/>;
			})}
		</Fragment>
	);
}

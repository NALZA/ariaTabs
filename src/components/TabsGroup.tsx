import React, { ReactElement, useState, Fragment } from 'react';
import { Tab } from './Tab';
import TabPanel from './TabPanel';

export interface TabProps {
	name: string;
	text: string;
	deletable: boolean;
}

export interface TabsGroupProps {
	tabs: Array<TabProps>;
}

export default function TabsGroup({ tabs }: TabsGroupProps): ReactElement {
	const [selected, setSelected] = useState(0);
	const [state, setstate] = useState(true);

	const handelKeyPressed = (e: React.KeyboardEvent) => {
		const key = e.key;
		switch (key) {
			case 'ArrowLeft':
				selectNewTab(selected - 1);
				break;
			case 'ArrowRight':
				selectNewTab(selected + 1);
				break;
			case 'End':
				selectNewTab(tabs.length - 1);
				break;
			case 'Home':
				selectNewTab(0);

				break;
			case 'Delete':
				if (tabs[selected].deletable === true) {
					tabs.splice(selected, 1);
					selectNewTab(selected - 1);
				}
				break;
		}
	};

	const selectNewTab = (selection: number) => {
		if (selection > tabs.length - 1) selection = 0;
		if (selection < 0) selection = tabs.length - 1;
		//hack to make sure state updates when 0 is tied to delete on an array pf length 2
		setstate(!state);
		setSelected(selection);
	};

	return (
		<Fragment>
			<div
				role='tablist'
				aria-label='Entertainment'
				onKeyDown={handelKeyPressed}
			>
				{tabs.map((tab, i) => {
					return (
						<Tab
							key={i}
							datakey={i}
							name={tab.name}
							deletable={tab.deletable}
							selected={i === selected ? true : false}
							onFocus={setSelected}
						/>
					);
				})}
			</div>
			{tabs.map((tab, i) => {
				return (
					<TabPanel
						key={i}
						name={tab.name}
						selected={i === selected ? true : false}
						text={tab.text}
					/>
				);
			})}
		</Fragment>
	);
}

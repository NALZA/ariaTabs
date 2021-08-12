import React, { ReactElement } from 'react';

interface Props {
	name: string;
	selected: boolean;
	text: string;
}

export default function TabPanel({
	name,
	selected,
	text,
}: Props): ReactElement {
	return (
		<div
			tabIndex={0}
			role='tabpanel'
			id={name + '-panel'}
			aria-labelledby={name + 'tab'}
			{...(selected ? {} : { hidden: true })}
		>
			<p>{text}</p>
		</div>
	);
}

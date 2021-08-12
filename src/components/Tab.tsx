import React from 'react';

interface Props {
	selected: boolean;
	name: string;
	deletable: boolean;
}

export const Tab = ({ selected, name, deletable }: Props) => {
	return (
		<button
			role='tab'
			aria-selected={selected ? 'true' : 'false'}
			aria-controls={name + '-panel'}
			id={name}
			{...(selected ? {} : { tabIndex: -1 })}
			{...(deletable ? { 'data-deletable': '' } : {})}
		>
			{name}
		</button>
	);
};

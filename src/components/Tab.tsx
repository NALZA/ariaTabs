import React from 'react';

interface Props {
	selected: boolean;
	id: string;
	name: string;
	deletable: boolean;
}

export const Tab = ({ selected, id, name, deletable }: Props) => {
	return (
		<button
			role='tab'
			aria-selected={selected ? 'true' : 'false'}
			aria-controls={id + '-tab' + (deletable ? '-deletable' : '')}
			id={id}
			{...(selected ? {} : { tabIndex: -1 })}
			{...(deletable ? { 'data-deletable': '' } : {})}
		>
			{name}
		</button>
	);
};

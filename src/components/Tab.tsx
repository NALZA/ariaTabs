import React, { useEffect, useRef } from 'react';

interface Props {
	datakey: number;
	selected: boolean;
	name: string;
	deletable: boolean;
	onFocus: (id: number) => void;
}

export const Tab = ({ datakey, selected, name, deletable, onFocus }: Props) => {
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (selected) ref.current?.focus();
	}, [selected]);

	return (
		<button
			role='tab'
			aria-selected={selected ? 'true' : 'false'}
			aria-controls={name + 'panel'}
			id={name}
			{...(selected ? {} : { tabIndex: -1 })}
			{...(deletable ? { 'data-deletable': '' } : {})}
			onFocus={() => onFocus(datakey)}
			ref={ref}
		>
			{name}
		</button>
	);
};

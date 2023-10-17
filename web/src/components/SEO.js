import React from 'react';

import logo from '../favicon/logo.svg';

export const SEO = ({ children }) => {
	return (
		<>
			<link id='icon' rel='icon' href={logo} />
			{children}
		</>
	);
};

import { createContext, useState } from 'react';

export const ServiceContext = createContext();

export const ServiceProvider = (props) => {
	const [user, setUser] = useState({});

	const contextData = {
		user,
		setUser,
	};
	return (
		<ServiceContext.Provider value={contextData}>
			{props.children}
		</ServiceContext.Provider>
	);
};
import React from 'react';

const useHover = () => {
	const [hovered, setHovered] = React.useState(false);
	const enter = () => setHovered(true);
	const leave = () => setHovered(false);

	const ref = React.useRef(null);
	React.useEffect(() => {
		const itemToHover = ref.current;
		itemToHover.addEventListener('mouseenter', enter);
		itemToHover.addEventListener('mouseleave', leave);

		return () => {
			itemToHover.removeEventListener('mouseenter', enter);
			itemToHover.removeEventListener('mouseleave', leave);
		};
	}, []);

	return ({ hovered, ref });
};

export { useHover };
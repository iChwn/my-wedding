import { DECREMENT, INCREMENT } from './types';

export const increaseCounter = () => {
	return {
		type: INCREMENT,
	};
};export const decreaseCounter = () => {
	return {
		type: DECREMENT,
	};
};
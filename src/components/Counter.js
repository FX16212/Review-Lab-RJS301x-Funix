import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const show = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();
	const handleIncrement = () => {
		dispatch({ type: 'increment' });
	};
	const handleIncrease = () => {
		dispatch({ type: 'increase', amount: 10 });
	};
	const handleDecrement = () => {
		dispatch({ type: 'decrement' });
	};
	const toggleCounterHandler = () => {
		dispatch({ type: 'toggle' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={handleIncrement}>Increment</button>
				<button onClick={handleIncrease}>Increase by 10</button>
				<button onClick={handleDecrement}>DecrementD</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

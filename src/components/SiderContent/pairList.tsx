import React from 'react';
// style
import styles from './styles.module.scss';

// utils
import classNames from 'classnames';

interface Props {
	pairs: { id: number; title: string }[];
	currentPairId: number;
	handlerClick: (id: number) => void;
}

const PairList: React.FC<Props> = ({ pairs, handlerClick, currentPairId }) => {
	return (
		<>
			{pairs.map((pair: any) => (
				<li
					key={pair.id}
					onClick={() => handlerClick(pair.id)}
					className={classNames(
						styles.cardWrapper,
						currentPairId === pair.id && styles.active
					)}
				>
					{pair.title}
				</li>
			))}
		</>
	);
};

export default PairList;

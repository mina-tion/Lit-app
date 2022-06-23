import React from 'react';
// style
import styles from './styles.module.scss';

interface Props { 
	register: any,
	type: string, 
	title: string, 
	name: string,
	errMessage: string,
	onChange: any
}

const InputField: React.FC<Props> = ({register, type, name, title, errMessage, onChange}) => {

	return (
		<div className={styles.inputContainer}>
			<p className={styles.inputTitle}>{title}</p>
			<input {...register(name)} className={styles.inputField} type={type} onChange={onChange}/>
			<p className={styles.error}>{errMessage}</p>
		</div>
	);
};

export default InputField;

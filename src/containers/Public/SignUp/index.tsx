import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

import { schema, onSubmit } from 'utils/schema';
import InputField from 'components/InputField';
// style
import styles from './styles.module.scss';
import { useHistory } from 'react-router';

const SingUp: React.FC = () => {
	const history = useHistory();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handlerChange = (e: any) => {
		e.target.value =
			e.target.value.charAt(0).toUpperCase() +
			e.target.value.substr(1).toLowerCase();
	};
	const handlerClick = () => {
		history.push('/login');
	};
	return useObserver(()=> (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<InputField
					register={register}
					type='text'
					title='First name'
					name='firstName'
					errMessage={errors.firstName?.message}
					onChange={handlerChange}
				/>
				<InputField
					register={register}
					type='text'
					title='E-mail'
					name='email'
					errMessage={errors.email?.message}
					onChange={() => {}}
				/>
				<InputField
					register={register}
					type='password'
					title='Password'
					name='password'
					errMessage={errors.password?.message}
					onChange={() => {}}
				/>
				<InputField
					register={register}
					type='password'
					title='Password'
					name='passwordConfirmation'
					errMessage={errors.passwordConfirmation?.message}
					onChange={() => {}}
				/>

				<input type='submit' value='Sign up' className={styles.submitButton} />
			</form>

			<a href='/' className={styles.link} onClick={handlerClick}>
				Already have an account? Sign in
			</a>
		</div>
	))
};

export default SingUp;

import { observable, makeObservable } from 'mobx';
import { autorun, set, toJS } from 'mobx';

export function autoSave(_this: any, name: string) {
	const storedJson = localStorage.getItem(name);
	if (storedJson) {
		set(_this, JSON.parse(storedJson));
	}
	autorun(() => {
		const value = toJS(_this);
		localStorage.setItem(name, JSON.stringify(value));
	});
}

class Store {
	public accessToken: string;
	constructor() {
		makeObservable(this);
		this.accessToken = '';
		autoSave(this, 'currencyPairsStore');
	}

	//charts
	@observable accountName: string = '';

	setAccountName(value: string) {
		this.accountName = value;
	}
}

export default new Store();

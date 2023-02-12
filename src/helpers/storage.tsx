import pack from './../../package.json';
import { IStorage } from '../types/IStorage';

export function get(): IStorage {
    if(localStorage.getItem(pack.name)) return JSON.parse(localStorage.getItem(pack.name) as string);
    return {};
}

export function store(data: IStorage) {
    localStorage.setItem(pack.name, JSON.stringify({
        ...get(),
        ...data,
    }))
}